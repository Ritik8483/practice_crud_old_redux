const initialState={
    candidateValue:[],
    selectedCandidate:{}
};
export const apiReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_API':return{
            // ...state,
            candidateValue:action.payload,
        }
        break;
        case 'GET_DELETE':return{
            ...state,
            // candidateValue:action.payload,
        }
        break;
        case 'GET_ADD_DATA':
            return {
                ...state
            };
        break;
        case 'GET_UPDATE':
            return{
                ...state,
            selectedCandidate:action.payload,
            };
        break;
        case 'EDIT_DETAILS':
            return {
                ...state,
                // candidateValue:action.payload,
            };
        break;
        default:return state;
    }
}