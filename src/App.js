import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginForm';
import DogGallery from './EventGallery';

const App = () => {
    const [userDetails, setUserDetails] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setUserDetails={setUserDetails} />} />
                <Route path="/gallery" element={<DogGallery userDetails={userDetails} />} />
            </Routes>
        </Router>
    );
};

export default App;
