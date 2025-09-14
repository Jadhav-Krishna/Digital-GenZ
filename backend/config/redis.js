const redis = require("redis")

let redisClient

const connectRedis = async () => {
  try {
    redisClient = redis.createClient({
      url: "redis://default:4hkXgtVUxVQjQ4zdhPcSXmvSVoEDpCcp@redis-17283.c240.us-east-1-3.ec2.redns.redis-cloud.com:17283" || "redis://localhost:6379",
    })

    redisClient.on("error", (err) => {
      console.error("❌ Redis Client Error:", err)
    })

    redisClient.on("connect", () => {
      console.log("✅ Redis connected")
    })

    await redisClient.connect()
    console.log("🔥 Redis ready to use")
  } catch (error) {
    console.error("Redis connection error:", error)
  }
}

const getRedisClient = () => {
  return redisClient
}

module.exports = {
  connectRedis,
  getRedisClient,
}
