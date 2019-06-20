import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
// import Technologies from './Technologies';
// import Footer from './Footer';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
            <Footer/>
        </div>
    )
};


export default App;
