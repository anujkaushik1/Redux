import axios from 'axios';
import * as actionTypes from './action';
 const fetchReq = ()=>{
    return {
        type : actionTypes.FETCH_REQ
    }
}

 const fetchSuc = (users) => {
    return {
        type : actionTypes.FETCH_SUC,
        payload : users
    }
}

 const fetchFail = (err)=>{
    return {
        type : actionTypes.FETCH_FAIL,
        payload : err.message
    }
}

export const fetchUserss = ()=>{   // MIDDLEWARE
    return async(dispatch)=> {  // OBJECT NAI HAI FUNCTION HAI
        dispatch(fetchReq())
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            let data = res.data;
            dispatch(fetchSuc(data));
        } catch (error) {
            dispatch(fetchFail(error));   
        }
    }
}