// MULTIPLE REDUCERS KO COMBINE KRNE KA KAAM KRTA HAI

import {combineReducers} from 'redux';
import BallReducer from './ballReducer';
import BatReducer from './batReducer';

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer
})

export default rootReducer; // iss root reducer ko phir hum store pr lga dete hai
