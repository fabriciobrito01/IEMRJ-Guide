import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 60px;
  justify-content: center;
  width: 100%;
  background: rgb(16, 28, 102);
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
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

const Entrar = styled.a`

`;
function Header() {
  return (
    <>
      <Navbar>
        <NavItem href='home'>Home</NavItem>
        <NavItem href='programacao'>Programação</NavItem>
        <NavItem href='mapa'>Mapa</NavItem>
        <NavItem href='hospedagem'>Hospedagem</NavItem>
        <NavItem href='times'>Times</NavItem>
        <NavItem href='entrar'>Entrar</NavItem>
      </Navbar>
    </>
  );
}

export default Header;
