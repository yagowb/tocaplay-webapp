import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Cadastro() {

  const [email, setEmail] = useState('');
  const [emailConfirmacao, setEmailConfirmacao] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [styles, setStyles] = useState([]);
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    console.log({email, emailConfirmacao, username, password, styles});
    if (email !== emailConfirmacao) {
      setError('Os e-mails não correspondem');
      return;
    }
    setEmail('');
    setEmailConfirmacao('');
    setUsername('');
    setPassword('');
    setStyles('');
    setError('');
    setError('Cadastro Realizado')
    setTimeout(() => {
      navigate('/');
    }, 3000);
    axios.post('http://localhost:3001/usuarios',{
      nome:username,
      email:email,
      senha:password
    })
    }
  
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              
              <form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4">Crie sua Conta TocaPlay</h1>
                
                
                <div className="form-group mb-3">
                  <label htmlFor="email" className='email-cadastro'>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                
                <div className="form-group mb-3">
                  <label htmlFor="email-confirmacao" class='email-confirmacao'>Confirme seu Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailconfirmacao"
                    placeholder="Digite seu email novamente"
                    value={emailConfirmacao}
                    onChange={(e) => setEmailConfirmacao(e.target.value)}
                    required
                  />
                </div>
                
                
                <div className="form-group mb-3">
                  <label htmlFor="username" className='username-cadastro'>Nome de usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Digite seu nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
               
                
                <div className="form-group mb-3">
                  <label htmlFor="password" className='password-cadastro'>Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                
                <div className="form-group mb-3">
                  <label htmlFor="styles" className='styles-cadastro'>Estilos musicais favoritos</label>
                  <select
                    className="form-control"
                    id="styles"
                    multiple
                    value={styles}
                    onChange={(e) => setStyles(Array.from(e.target.selectedOptions, (option) => option.value))}
                    required
                  >
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="hiphop">Hip Hop</option>
                    <option value="classical">Clássica</option>
                  </select>
                </div>
                
                <br></br><br></br>
                <div className="form-group form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="acceptTerms"
                    required
                  />
                  <label className="form-check-label" htmlFor="acceptTerms">
                    Eu aceito os <a href="https://www.spotify.com/br-pt/legal/end-user-agreement/" target="_blank" rel="noopener noreferrer">termos de compromisso</a>
                  </label>
                </div>
                
                
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="newsletter"
                  />
                  <label className="form-check-label" htmlFor="newsletter">
                    Quero receber novidades e newsletters sobre a TocaPlay
                  </label>
                </div>
                
                
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary">Cadastrar</button>
                  {error && <p className={error.includes('não correspondem') ? 'error-message' : 'success-message'}>{error}</p>}
                </div>
              </form>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      );
    
}

export default Cadastro;
