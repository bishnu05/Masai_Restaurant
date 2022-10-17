import axios from 'axios';
import { LOGIN_R, LOGIN_S,LOGIN_F } from './types';



const loginApi=(data)=>(dispatch)=>
{
    dispatch({type:LOGIN_R});
    return axios.post("https://reqres.in/api/login",data)
    .then((res)=>{dispatch({type:LOGIN_S,payload:res.data.token})})
    .catch((err)=>{dispatch({type:LOGIN_F})});
}

export {loginApi}