import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionType";

const initialState={
    posts:[],
    loading:false,
    error:null
}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_POST_START:
            return{
                ...state,
                loading:true
            }

         case types.FETCH_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                posts:action.payload
            }   

            case types.FETCH_POST_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.error

                };
                default:
                    return state;
    }
}

export default postReducer;