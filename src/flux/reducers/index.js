import {combineReducers} from 'redux';

import textoReducer from './textoReducer.js';


const allReducers= combineReducers({
  texto: textoReducer,

});

export default allReducers;