import { SORT_S,SORT_F,SORT_R,FILTER_S,FILTER_F,FILTER_R, GET_F, GET_R,GET_S } from "./types"

let init={
    isLoading:false,
    isError: false,
    data:[]
}

export const datareducer=(state=init,{type,payload})=>
{
    switch(type)
    {
        case GET_R:{
            return {...state,isLoading:true,isError:false}
        }
        case GET_S:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case GET_F:{
            return {...state,isLoading:false,isError:true}
        }
        case FILTER_S:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case FILTER_R:{
            return {...state,isLoading:true,isError:false}
        }
        case FILTER_F:{
            return {...state,isLoading:false,isError:true}
        }
        case SORT_S:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case SORT_R:{
            return {...state,isLoading:true,isError:false}
        }
        case SORT_F:{
            return {...state,isLoading:false,isError:true}
        }
        default:
            {
                return state
            }
    }
}