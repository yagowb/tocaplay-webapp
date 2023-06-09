import React, { useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import instance from '../axiosConfig'; 




function Perfil({ toggleEditarPerfil }) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const id = usuario._id;
  
  let [playlistsPrivadas, setPlaylistsPrivadas] = useState([]);

  useEffect(() => {
    instance
      .get(`/playlistsPrivadas?idUsuario=${id}`)
      .then((response) => {
        setPlaylistsPrivadas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching playlistsPrivadas:", error);
      });
  }, [id]);
  
  const [showInputs, setShowInputs] = useState(false);
  const [nomePlaylist, setNomePlaylist] = useState('');
  const [musicasPlaylist, setMusicasPlaylist] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowInputs(!showInputs);
  };

  function cadastrarPlaylists() {
    instance.post(`/usuarios/${id}/playlistsPrivadas`, {
      idUsuario: id,
      nome: nomePlaylist,
      musicas: musicasPlaylist
    });
  }

  function logout() {
    localStorage.removeItem("usuarioLogado");
    navigate('/login');
  }

  //***********************************************/
  // *************MÚSICAS SELECIONADAS*************
  //***********************************************/
  async function adicionarMusicas(id) {
    try {
      const response = await instance.get(`/musicas/${id}`);
      const musica = response.data;
      if (musicasPlaylist == null) {
        setMusicasPlaylist([musica]);
      } else {
        setMusicasPlaylist([...musicasPlaylist, musica]);
      }
    } catch (error) {
      console.error(error);
    }
  }


  //***********************************************/
  // *************PESQUISA*************************
  //***********************************************/

  const [pesquisa, setPesquisa] = useState('');
  const [resultado, setResultado] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleChange = (event) => {
    setPesquisa(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (searchClicked) {
        return;
      }
      setSearchClicked(true);
      const resposta = await instance.get('/musicas');
      const resultadosFiltrados = resposta.data.filter(
        (item) =>
          item.nome.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setResultado(resultadosFiltrados);
      setSearchClicked(false);
    } catch (error) {
      console.error(error);
      setSearchClicked(false);
    }
  };


    //***********************************************/
  // *************EXIBIR PLAYLIST*************
  //***********************************************/
  const [currentTrack, setCurrentTrack] = useState(null);

  const start = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(track);
    setCurrentTrack(audio);
    audio.play();
  };

  const stop = () => {
    if (currentTrack) {
      currentTrack.pause();
      setCurrentTrack(null);
    }
  };

  return (
    <div>
      <Card style={{ width: '20rem', margin: '0 auto', marginBottom: '20px', marginTop: '20px' }} className="mx-auto">
        <Card.Header className="text-center">Seu Perfil</Card.Header>
        <Card.Body className="text-center">
          <Card.Text className="user-name">
            {usuario.nome}
          </Card.Text>
          <Card.Text>
            {usuario.email}
          </Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="primary"
              onClick={handleClick}
              className="mx-2 cria-playlist-btn"
            >
              Criar Playlists
            </Button>
            <Button
              variant="primary"
              onClick={toggleEditarPerfil}
              className="mx-2 editar-perfil-btn"
            >
              Editar Perfil
            </Button>
            <Button
              variant="danger"
              onClick={logout}
              className="mx-2 logout-btn"
            >
              Logout
            </Button>
          </div>
        </Card.Body>
      </Card>
      <div className='showInputs'>
        {showInputs && (
          <div>
            <label className='Nome-Playlist'>Nome da playlist</label>
            <input className='input-nome-plalist' type="text" value={nomePlaylist} onChange={(e) => setNomePlaylist(e.target.value)} />
            <br />
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="buscar nome de musicas" value={pesquisa} onChange={handleChange} />
              <button className='busca' type="submit">Buscar</button>
            </form>
            {resultado.map((result, index) => (
              <div key={index}>
                <p className='resultado-pesquisa-p'>Nome da musica: {result.nome} by {result.cantor}</p>
                <button className='resultado-pesquisa-button' onClick={() => adicionarMusicas(result._id)}>Adicionar a playlist</button>
              </div>
            ))}
            <button className='cadastrar-playlist' onClick={() => cadastrarPlaylists()}>Cadastrar Playlist</button>
          </div>
        )}
      </div>
      <div className='Exibir-Playlists'>
        {playlistsPrivadas.map(playlists => (
          <>
            <h3>Playlist {playlists.nome} <Link to={`/editarPlaylist/${playlists._id}`}>EDITAR</Link></h3>
            {playlists.musicas.map(musica => (
              <li key={musica.id}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{musica.nome} by {musica.cantor}</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={() => start(musica.track)} style={{
                      backgroundImage: 'url(../images/PLAY.png)',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      padding: '20px',
                      marginRight: '20px'
                    }}>
                    </button>

                    <button onClick={stop} style={{
                      backgroundImage: 'url(../images/pause.png)',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      padding: '20px'
                    }}>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default Perfil;
