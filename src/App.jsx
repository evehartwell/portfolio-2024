import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Contact from './pages/contact';
import Archive from './pages/archive';
import ModesensStudy from './pages/modesens-study';
import BlackhippieStudy from './pages/bha-study';
import MapStudy from './pages/cff-study';
import LeBowStudy from './pages/lebow-study';
import CodeStudy from './pages/ccp-study';
import GovStudy from './pages/gov-study';
import CaseStudyTemplate from './components/caseTemplate';
import '/styles.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/case-temp" element={<CaseStudyTemplate />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/modesens-study" element={<ModesensStudy />} />
                <Route path="/bha-study" element={<BlackhippieStudy />} />
                <Route path="/cff-study" element={<MapStudy />} />
                <Route path="/lebow-study" element={<LeBowStudy />} />
                <Route path="/ccp-study" element={<CodeStudy />} />
                <Route path="/gov-study" element={<GovStudy />} />
                
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
