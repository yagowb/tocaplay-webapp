import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <Link class="navbar-brand" to="/">
          {/* <img src="./imgs/logo1.png" alt="..." height="70"> */}
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/faq">FAQ</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cadastro">Cadastro</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/perfil">Perfil</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
