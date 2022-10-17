import axios from "axios";
import { GET_R ,GET_S,GET_F,FILTER_F,FILTER_R,FILTER_S,SORT_F,SORT_R,SORT_S} from "./types";

const getApi=(page)=>(dispatch)=>
{
    dispatch({type: GET_R});
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=20`)
    .then((res)=>{dispatch({type: GET_S,payload:res.data.data})})
    .catch((err)=>{dispatch({type:GET_F})})
}

const filterApi=(filter)=>(dispatch)=>
{

    dispatch({type: FILTER_R});
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=20&filter=${filter}`)
    .then((res)=>{dispatch({type: FILTER_S,payload:res.data.data})})
    .catch((err)=>{dispatch({type:FILTER_F})})
}

const sortApi=(sort,type,filter)=>(dispatch)=>
{
    console.log(sort,type);
    dispatch({type: SORT_R});
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=20&sort=${type}&order=${sort}&filter=${filter}`)
    .then((res)=>{dispatch({type: SORT_S,payload:res.data.data})})
    .catch((err)=>{dispatch({type:SORT_F})})
}
export {getApi,filterApi,sortApi}