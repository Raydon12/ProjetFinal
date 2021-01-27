const initialState = {
  adressCity: "",
  adressNum: null,
  adressStreet: "",
  adresseZip: null,
  category: null,
  description: "",
  userId: null,
  userName: "",
  phoneNumber: null,
  logo: "",
  latitude: null,
  longitude: null,
};

function ReducerPro(state = initialState, action) {
  switch (action.type) {
    case "IS_CLICKED":
      return {
        ...state,

        userId: action.value.userId, // == user tokken recu en réponse de lma requete get sur login()
        userName: action.value.userName,
        adressCity: action.value.adressCity,
        adressNum: action.value.adressNum,
        adressStreet: action.value.adressStreet,
        adresseZip: action.value.adresseZip,
        category: action.value.category,
        description: action.value.description,
        phoneNumber: action.value.phoneNumber,
        logo: action.value.logo,
        latitude: action.value.latitude,
        longitude: action.value.longitude,
        // attention si pas présent , il fusionne pas les autres prop
      };
    case "ADDREQUEST":
      return {};

    default:
      return state;
  }
}
export default ReducerPro;
