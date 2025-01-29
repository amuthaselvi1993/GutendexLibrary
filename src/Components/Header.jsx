import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.header`
  background-color: #2563eb; /* Tailwind's blue-600 */
  color: white;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #fffff;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #93c5fd; /* Tailwind's blue-300 */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <Link to="/">The Gutendex Library</Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <NavLink to="/category">Category</NavLink>
            </li>
            <li>
              <NavLink to="/favourites">Favourites</NavLink>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
