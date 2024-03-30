 import {useSelector} from "react-redux";
 import {selectUser} from "../redux/auth/auth-selectors";
 export const useAuth=()=>{
    const user=useSelector(selectUser);
    if (!user) {
        return { isAuth: false, email: null, token: null, id: null };
      }
    
      const { email, token, id } = user;
      return {
        isAuth: true,
        email,
        token,
        id
      };
    };
 