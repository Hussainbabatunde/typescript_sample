import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authtoken } from "../state/auth";


const PrivateRoutes = () => {

  interface Iroot {
    authReducer: {
      authtoken: string
    }
  }
  // const token = useSelector(authtoken)
  const token: any= localStorage.getItem("token")
  console.log('my token', token)
  return token ? <Outlet /> : <Navigate  to ='/' />
  
}


export default PrivateRoutes;