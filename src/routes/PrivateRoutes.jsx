import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()

    if(user) {
        return children;
    }
  return <Navigate to="/login" state={location.pathname}></Navigate>
}

export default PrivateRoutes