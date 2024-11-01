/*************  ✨ Codeium Command ⭐  *************/
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-icon"></div>
      <div className="header-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="header-menu-icon">
          <span className="header-menu-icon-line"></span>
          <span className="header-menu-icon-line"></span>
          <span className="header-menu-icon-line"></span>
        </div>
        {menuOpen && (
          <div className="header-menu-options">
            <ul>

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
                    width: 40px;
                    height: 40px;
                    background-color: #444;
                    border-radius: 50%;
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
                    border-top: 7px  rgb(01, 01, 40) solid;
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
            `}</style>
    </header>
  );
}

export default Header;
/******  067b6ff2-90e5-48ae-be97-fa56c2db6d50  *******/