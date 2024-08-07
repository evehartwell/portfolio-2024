import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/home.js';
import About from './components/about.js'; 
import Contact from './components/contact.js';
import ModesensStudy from './components/modesens-study.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/modesens-study" element={<ModesensStudy />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
