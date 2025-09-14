const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          if (!profile || !profile.id) {
            return done(new Error("Invalid Google Profile"), null);
          }
          // ("Google Profile:", profile);

          // Check if user already exists with this Google ID
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            // Update last login
            user.lastLogin = new Date();
            await user.save();
            return done(null, user);
          }

          // Check if user exists with same email
          if (profile.emails && profile.emails.length > 0) {
            user = await User.findOne({ email: profile.emails[0].value });
            if (user) {
              // Link Google account to existing user
              user.googleId = profile.id;
              user.lastLogin = new Date();
              if (
                !user.avatar.url &&
                profile.photos &&
                profile.photos.length > 0
              ) {
                user.avatar.url = profile.photos[0].value;
              }
              await user.save();
              return done(null, user);
            }
          }

          // Create new user - Generate a random phone number for Google users
          // They can update it later or during checkout
          const randomPhone = `9${
            Math.floor(Math.random() * 900000000) + 100000000
          }`;

          const newUser = await User.create({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email:
              profile.emails && profile.emails.length > 0
                ? profile.emails[0].value
                : null,
            phone: randomPhone,
            avatar: {
              url:
                profile.photos && profile.photos.length > 0
                  ? profile.photos[0].value
                  : null,
            },
            lastLogin: new Date(),
            isPhoneVerified: false, // Google users need to verify phone later
          });

          // Send welcome email
          if (newUser.email) {
            try {
              await require("../services/email.Service").sendWelcomeEmail(
                newUser.email,
                newUser.firstName
              );
            } catch (emailError) {
              console.error("Welcome email error:", emailError);
            }
          }

          done(null, newUser);
        } catch (error) {
          console.error("Google OAuth Error:", error);
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
