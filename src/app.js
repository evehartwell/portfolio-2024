import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/home';
import About from './components/about'; 
import Contact from './components/contact';
import ModesensStudy from './components/modesens-study';
import BlackhippieStudy from './components/bha-study';
import MapStudy from './components/cff-study';
import LeBowStudy from './components/lebow-study';
import BankStudy from './components/bank-study';

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
