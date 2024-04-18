import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth} from '../redux/auth/auth-selectors';
const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectIsAuth);
  
  return isLogin ? children : <Navigate to="/"  />;
};
export default PrivateRoute;