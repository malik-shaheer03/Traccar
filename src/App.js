// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import MissionVisionValues from './components/MissionVisionValues/MissionVisionValues';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard.js'; // Import Dashboard component
import './App.css';

const AppContent = () => {
    const location = useLocation();
    const hideNavbar = location.pathname === '/dashboard'; // Keep this for conditional navbar

    return (
        <div className="App">
            {!hideNavbar && <Navbar />}
            <div className="main-content">
                <Routes>
                    <Route path="" element={
                        <>
                            <HeroSection />
                            <MissionVisionValues />
                            <Testimonials />
                            <Footer />
                        </>
                    } />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
};

function App() {
    return (
        <BrowserRouter basename="/Traccar"> {/* Corrected basename */}
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
