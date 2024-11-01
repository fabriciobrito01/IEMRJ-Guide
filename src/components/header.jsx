import styled from 'styled-components';
import Hamburger from 'hamburger-react'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 20px;
  justify-content: center;

  width: 113%;
  background: rgb(16, 28, 102);
  padding: 20px;
`;

const NavItem = styled.a`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;

  &:hover {
    color: #FFEE51;
  }
`;

function Header() {
    return (
        <>
            <Navbar>
                <NavItem href='home'>Home</NavItem>
                <NavItem href='mapa'>Mapa</NavItem>
                <NavItem href='programacao'>Programação</NavItem>
                <NavItem href='hospedagem'>Hospedagem</NavItem>
                <NavItem href='times'>Times</NavItem>
                <NavItem href='entrar'>Entrar</NavItem>
            </Navbar>
        </>
    );
}

export default Header;
