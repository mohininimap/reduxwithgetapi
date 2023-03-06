import * as types from "./actionType";
import axios from 'axios';

const fetchPostStart=()=>({
    type:types.FETCH_POST_START,
})
const fetchPostSuccess=(posts)=>({
    type:types.FETCH_POST_SUCCESS,
    payload:posts
})
const fetchPostFail=(error)=>({
    type:types.FETCH_POST_FAIL,
    payload:error
})


export function fetchPosts(){
    
    return function(dispatch){
        dispatch(fetchPostStart())
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            const posts=response.data;
            dispatch(fetchPostSuccess(posts))
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
       
    }
}

// export function deletePosts(obj){
    
//     return function(dispatch){
//         dispatch(deletePostStart())
//         axios.get(`${id}`)
//         .then((obj)=>{
//             const posts=response.data;
//             dispatch(fetchPostSuccess(posts))
//         }).catch((error)=>{
//             dispatch(fetchPostFail(error.message))
//         })
       
//     }
// }