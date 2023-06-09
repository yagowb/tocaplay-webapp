import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [mensagem, setMensagem] = useState('');

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuarioLogado) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className='user-logged'>Usuário Logado</h2>
      </div>
    );
  }


  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`http://localhost:3001/usuarios?email=${email}`).then((resultado) => {
      const usuario = resultado.data;
      console.log(usuario)
      if (!usuario || usuario.senha != senha) {
        setError('Usuário ou senha inválidos');
        return;
      }

      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

      setError('');
      setEmail('');
      setSenha('');
      setMensagem('Login feito com sucesso!');
    });
  }
  


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-8 col-md-6 mx-auto">
          <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title login-title">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="email-label">E-mail</label>
                  <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  aria-describedby="emailHelp" 
                  placeholder="Insira seu e-mail cadastrado" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required />
                  <small id="emailHelp" className="form-text text-muted">Nós nunca compartilharemos seus dados com ninguém.</small>
                </div>

                <br></br>

                <div className="form-group">
                  <label htmlFor="password" className="password-label">Senha</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Insira sua senha" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)} 
                  required />
                </div>

                <br></br>
                

                <button type="submit" className="btn btn-primary">Entrar</button>
                <p className="error-login">{error}</p>
                <p className="success-login">{mensagem}</p>
              </form>


              <div className="mt-3">
                <Link to="/cadastro">Não tem conta? Cadastre-se!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }


export default Login;
