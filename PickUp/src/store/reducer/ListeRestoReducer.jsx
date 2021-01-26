const initialState = {
list:[],
listTri:[],
map:[]
}


function ReducerList(state = initialState, action){
    switch (action.type) {
        case 'ADDING':
            return {
                 ...state,
               list : action.value
            }
            case 'ADD_REQUEST':
                return{
                    ...state,
                    listTri : action.value
                } 
                case 'TESTINGFIST':
                    return{
                        ...state,
                        map : action.value
                    }               
        default:
            return state
    }
}
export default ReducerList;