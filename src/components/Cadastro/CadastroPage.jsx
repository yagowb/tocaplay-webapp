import React from 'react';
import Cadastro from '../Cadastro/Cadastro';
import Header from '../home/Header';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function CadastroPage() {
    return (
        <>
        <div className='cadastro-container'>
            <div className="cadastro-header">
                <Header/>
                <Navbar/>
            </div>
            <div className='cadastro-content'>
                <Cadastro/>
            </div>

            <div className="cadastro-footer">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default CadastroPage;