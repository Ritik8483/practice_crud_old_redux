import axios from "axios";
const getData=(getData)=>{
    return{
        type:'GET_API',
        payload:getData
    }
}
const getDelete=()=>{
    return{
        type:'GET_DELETE'
    }
}
// const getAdd=()=>{
//     return{
//         type:'GET_ADD_DATA'
//     }
// }
const getUpdate=(fulldata)=>{
    return{
        type:'GET_UPDATE',
        payload:fulldata.data
    }
}
// const getEditForm=()=>{
//     return{
//         type:'EDIT_DETAILS',
//     }
// }




export const getApiData=()=>{
    console.log('R')
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((response)=>{
            console.log('Response',response);
            dispatch(getData(response.data));
        })
        .catch((error)=>console.log(error));
    }
}

export const getAPiDelete=(id)=>{
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((response)=>{
            dispatch(getDelete());
            dispatch(getApiData());
        })
        .catch((error)=>console.log(error))
    }
}
export const getApiAdd=(addData)=>{
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`,addData)
        .then((response)=>{
            dispatch(getApiData())
        })
        .catch((error)=>console.log(error));
    }

}
export const getUpdateCandidate=(id)=>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((response)=>{
            dispatch(getUpdate(response))
        })
        .catch((error)=>console.log(error));
    }
}
export const getEditedDetails=(candidate,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,candidate)
        .then((response)=>{
            dispatch(getApiData());
            // dispatch(getApiData());
        })
        .catch((error)=>console.log(error));
    }
}