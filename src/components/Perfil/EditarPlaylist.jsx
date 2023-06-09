import React, { useState, useEffect } from 'react';
import Header from '../home/Header';
import Navbar from '../home/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../home/Footer';
import axios from 'axios';

function EditarPlaylist() {
  const { id } = useParams();
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  const navigate = useNavigate();

  const [nomePlaylist, setNomePlaylist] = useState('');
  const [musicasAdicionadas, setMusicasAdicionadas] = useState([]);
  const [musicasDisponiveis, setMusicasDisponiveis] = useState([]);
  const [mensagem, setMensagem] = useState('');



  useEffect(() => {
    axios
      .get(`http://localhost:3001/playlistsPrivadas/${id}`)
      .then((res) => {
        setNomePlaylist(res.data.nome);
        setMusicasAdicionadas(res.data.musicas);
      });
    axios.get('http://localhost:3001/musicas').then((res) => {
      setMusicasDisponiveis(res.data);
    });
  }, [id]);



  function handleAddMusica(musica) {
    setMusicasAdicionadas((prevMusicas) => [...prevMusicas, musica]);
  }

  function handleRemoveMusica(musica) {
    console.log(musica)
    setMusicasAdicionadas((prevMusicas) =>
      prevMusicas.filter((m) => m.nome !== musica.nome)
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.patch(`http://localhost:3001/playlistsPrivadas/${id}`,{
      nome: nomePlaylist,
      musicas: musicasAdicionadas
    }).then(navigate('/perfil'))
  }

  if (!usuario) {
    return (
      <div className="not-perfil-container">
        <div className="not-perfil-header">
          <Header />
          <Navbar />
        </div>
        <div className="not-perfil-content">
          <h2 className="not-perfil">
            Para acessar as funções de Perfil é necessário estar logado.
          </h2>
          <Link to="/login">
            <h3 className="not-perfil">Faça o login</h3>
          </Link>
        </div>
        <div className="login-footer">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="cadastro-container">
        <div className="cadastro-header">
          <Header />
          <Navbar />
        </div>
        <div className="editarplaylist-content">
          <h1>Editar Playlist</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group nome-playlist">
              <label htmlFor="nomePlaylist">Nome da Playlist</label>
              <input
                type="text"
                className="form-control nome-input"
                id="nomePlaylist"
                placeholder="Digite o nome da playlist"
                value={nomePlaylist}
                onChange={(event) => setNomePlaylist(event.target.value)}
                required
              />
            </div>
            <div className="form-group add-musicas">
              <label htmlFor="musicasDisponiveis">Adicionar Músicas</label>
              <select
                multiple
                className="form-control musicas-input"
                id="musicasDisponiveis"
                onChange={(event) =>
                  handleAddMusica(
                    musicasDisponiveis.find(
                      (musica) => musica.nome === event.target.value
                    )
                  )
                }
              >
                {musicasDisponiveis.map((musica) => (
                  <option key={musica.id} value={musica.id}>
                    {musica.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group musicas-adc">
              <label htmlFor="musicasAdicionadas">Músicas Adicionadas</label>
              <select
                multiple
                className="form-control select-musicas"
                id="musicasAdicionadas"
                onChange={(event) =>
                  handleRemoveMusica(
                    musicasAdicionadas.find(
                      (musica) => musica.nome === event.target.value
                    )
                  )
                }
              >
                {musicasAdicionadas.map((musica) => (
                  <option key={musica.id} value={musica.id}>
                    {musica.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group salvar">
              <button type="submit" className="btn btn-primary">
                Salvar Alterações
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelar"
                onClick={() => navigate('/perfil')}
              >
                Cancelar
              </button>
            </div>
            {mensagem && (
              <div className="alert alert-primary" role="alert">
                {mensagem}
              </div>
            )}
          </form>
        </div>
        <div className="cadastro-footer">
          <Footer />
        </div>
      </div>
    </>
  );
  
}

export default EditarPlaylist;
