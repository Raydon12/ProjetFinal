import {createStore, combineReducers} from 'redux';
import ReducerImage from './reducer/ImageReducer';
import ReducerList from './reducer/ListeRestoReducer';
import ReducerReservation from './reducer/ReservationReducer';
import ReducerPro from './reducer/RestoReducer';
import UserReducer from './reducer/UserReducer';

const MainReducer = combineReducers({
    user: UserReducer,
    pro : ReducerPro,
    list : ReducerList,
    reservation : ReducerReservation,
    image : ReducerImage
})

export default createStore(MainReducer)