const initialState = {
    isConnect : false,
    lastName : "",
    firstName : "",
    email :"",
    phoneNumber :"",
    id:null,
    token: null
}


function Reducer(state = initialState, action){
    switch (action.type) {
        case 'IS_LOGGED_IN':
            return {
                ...state, // attention si pas présent , il fusionne pas les autres prop
                token: action.value.token,
                lastName: action.value.lastName,
                firstName : action.value.firstName,
                email:action.value.email,
                phoneNumber:action.value.phoneNumber,
                id:action.value.id ,// == user tokken recu en réponse de lma requete get sur login()
                isConnect : true
            }
            case "LOG_OUT" :
                return{
                    isConnect : false,
                    lastName : "",
                    firstName : "",
                    email :"",
                    phoneNumber :"",
                    image :"",
                    token: null
                }
        default:
            return state
    }
}
export default Reducer;