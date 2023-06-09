import React from 'react';
import Login from '../Login/Login';
import Header from '../home/Header';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function LoginPage() {

    return (
        <>
        <div className='login-container'>
            <div className="login-header">
                <Header/>
                <Navbar/>
            </div>
            <div className='login-content'>
                <Login/>
            </div>

            <div className="login-footer">
                <Footer/>
            </div>
        </div>
        </>
    );
   


}

export default LoginPage;