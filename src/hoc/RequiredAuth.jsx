import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


export const RequiredAuth=({children})=>
{
   const isAuth=useSelector((state)=>state.auth.isAuth);
    if(isAuth)
     {
        return children
     }
     else{
        return <Navigate to={'/login'} replace/>
     }
}