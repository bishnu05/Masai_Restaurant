import { LOGIN_F,LOGIN_R,LOGIN_S } from "./types";
let token=localStorage.getItem("token");

let init={
    token:token,
    isAuth:!!token,
    loading:false,
    error:false
}

const authReducer=(state=init,{type,payload})=>
    {
       switch(type)
       {
       case LOGIN_R:
        {
            return{
                ...state,isAuth:false,loading:true,error:false
            }
        }
        case LOGIN_S:
            {
                console.log(payload);
                
                localStorage.setItem("token",payload);
               return{
                ...state,isAuth:true,loading:false,error:false
               }
            }
            case LOGIN_F:
                {
                    return{
                        ...state,isAuth:false,loading:false,error:true
                    }
                }
        default:
            {
                return state
            }
       }
    }
    export default authReducer