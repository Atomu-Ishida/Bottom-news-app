import Pages from './pages/Pages';
import Category from './components/Category';
import { HashRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { FaRegNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Nav>
          <FaRegNewspaper />
          <Logo to='/'> Bottom News</Logo>
        </Nav>
        <Explanation>
          トップを飾るようなニュースだけでなく、あまり注目が集まらないニュースにも目を向けて欲しいと思いこのサイトを作りました。
        </Explanation>
        <Search />
        <Category />
        <Pages />
      </HashRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Explanation = styled.p`
  margin-bottom: 2rem;
`;
export default App;
