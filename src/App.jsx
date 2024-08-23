import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Homepage from './pages/home';
import About from './pages/about'; 
import Contact from './pages/contact';
import ModesensStudy from './pages/modesens-study';
import BlackhippieStudy from './pages/bha-study';
import MapStudy from './pages/cff-study';
import LeBowStudy from './pages/lebow-study';
import BankStudy from './pages/bank-study';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Eve H Portfolio</title>
                <link rel="icon" href="/images/star.svg" />
            </Helmet>
            <Router>
                <ScrollToTop />
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
        </HelmetProvider>
    );
};

export default App;
