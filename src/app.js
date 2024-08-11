import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/home.js';
import About from './components/about.js'; 
import Contact from './components/contact.js';
import ModesensStudy from './components/modesens-study.js';
import BlackhippieStudy from './components/bha-study.js';
import MapStudy from './components/cff-study.js';
import LeBowStudy from './components/lebow-study.js';
import BankStudy from './components/bank-study.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/modesens-study" element={<ModesensStudy />} />
                <Route path="/bha-study" element={<BlackhippieStudy />} />
                <Route path="/cff-study" element={<MapStudy />} />
                <Route path="/lebow-study" element={<LeBowStudy />} />
                <Route path="/bank-study" element={<BankStudy />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
