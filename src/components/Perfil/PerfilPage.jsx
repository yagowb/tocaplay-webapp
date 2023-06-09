import React, { useState } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Perfil from '../Perfil/Perfil';
import Navbar from '../home/Navbar';
import EditarPerfil from '../Perfil/EditarPerfil';
import { Link } from 'react-router-dom';

function PerfilPage() {
    const [editarPerfil, setEditarPerfil] = useState(false);
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {
        return (
            <div className="not-perfil-container">
                <div className="not-perfil-header">
                    <Header />
                    <Navbar />
                </div>
                <div className='not-perfil-content'>
                <h2 className="not-perfil">Para acessar as funções de Perfil é necessário estar logado.</h2>
                <Link to="/login">
                    <h3 className='not-perfil'>Faça o login</h3>
                </Link>
                </div>
                 <div className="login-footer">
                    <Footer/>
                </div>
            </div>
        )

    }

    function toggleEditarPerfil() {
        setEditarPerfil(!editarPerfil);
    }

    return (
        <>
            <div className='cadastro-container'>
                <div className="cadastro-header">
                    <Header />
                    <Navbar />
                </div>
                <div className='cadastro-content'>
                    {editarPerfil ? (
                        <EditarPerfil usuario={usuario} toggleEditarPerfil={toggleEditarPerfil} />
                    ) : (
                        <>
                            <Perfil usuario={usuario} toggleEditarPerfil={toggleEditarPerfil} />
                        </>
                    )}
                </div>
                {/* <div className="cadastro-footer">
                    <Footer/>
                </div> */}
            </div>
        </>
    );
}

export default PerfilPage;