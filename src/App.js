import './App.css';
import Home from './components/home/Home';
import FAQPage from './components/FAQ/FAQPage';
import CadastroPage from './components/Cadastro/CadastroPage';
import LoginPage from './components/Login/LoginPage';
import Playlist from './components/Playlist/Playlist';
import PerfilPage from './components/Perfil/PerfilPage';
import EditarPlaylist from './components/Perfil/EditarPlaylist';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/playlist/:_id" element={<Playlist/>}/>
        <Route path="/faq" element={<FAQPage/>} />
        <Route path="/cadastro" element={<CadastroPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/perfil" element={<PerfilPage/>}/>
        <Route path="/editarPlaylist/:id" element={<EditarPlaylist/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
