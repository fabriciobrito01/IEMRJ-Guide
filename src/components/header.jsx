import { useState } from 'react';
import logo from '../assets/iem-logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className='header-icon'><img src={logo} alt="Logo" /></div>
      <div className="header-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="header-menu-icon">
          <span className="header-menu-icon-line"></span>
          <span className="header-menu-icon-line"></span>
          <span className="header-menu-icon-line"></span>
        </div>
        {menuOpen && (
          <div className="header-menu-options">
            <ul>
              <li>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              </li>
              <li>
                <a href="#mapa" onClick={() => setMenuOpen(false)}>Mapa</a>
              </li>
              <li>
                <a href="#progamacao" onClick={() => setMenuOpen(false)}>Programação</a>
              </li>
              <li>
                <a href="#hospedagem" onClick={() => setMenuOpen(false)}>Hospedagem</a>
              </li>
              <li>
                <a href="#times" onClick={() => setMenuOpen(false)}>Times</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <style jsx>{`

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(16, 28, 102);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-icon {
    width: 125px;
    height: 45px;
    border-radius: 0%;
    overflow: hidden; /* Garante que a imagem fique dentro do círculo */
  }

  .header-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Redimensiona a imagem para cobrir o espaço do ícone */
  }

  .header-menu {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header-menu-icon {
    position: relative;
    right: 18px;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header-menu-icon-line {
    width: 80%;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    border-radius: 5px;
  }

  .header-menu-options {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    height: 50vh;
    background-color: rgb(16, 28, 102);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 7px rgb(01, 01, 40) solid;
  }

  .header-menu-options ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-menu-options li {
    margin: 10px;
    color: #fff;
  }

  .header-menu-options a {
    text-decoration: none;
    color: #fff;
    font-size: 25px;
  }
`}</style>

    </header>
  );
}

export default Header;