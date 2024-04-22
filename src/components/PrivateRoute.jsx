import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/auth/auth-selectors';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
const PrivateRoute = () => {
  const isLogin = useSelector(selectIsAuth);

  return isLogin ? <FavoritesPage /> : <Navigate to="/" replace />;
};
export default PrivateRoute;
