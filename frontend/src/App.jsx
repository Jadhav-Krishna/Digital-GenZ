import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalZenze from './pages/DigitalZenze';
 import ServicesCoursesPage from './pages/ServicesCoursesPage'
 import CollaborationPage from './pages/CollaborationPage'
 import DigitalGenZVlog from "./pages/DigitalGenZVlog"
 import Form from './components/DigitalGenZApplicationForm';

const App = () => {
  return (
     <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<DigitalZenze />} />
          <Route path="/services" element={<ServicesCoursesPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
           <Route path="/vlog" element={<DigitalGenZVlog />} />
          <Route path="/join" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
