import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Container from '../Container/Container';
import NotFoundHeader from '../NotFoundHeader/NotFoundHeader';


const Layout = () => {
  const location = useLocation();
  const isNotFoundPage =
    location.pathname !== '/' &&
    location.pathname !== '/teachers' &&
    location.pathname !== '/favorites';

  return (
    <Container>
      {isNotFoundPage ? <NotFoundHeader /> : <Header />}

      <Outlet />
    </Container>
  );
};
export default Layout;
