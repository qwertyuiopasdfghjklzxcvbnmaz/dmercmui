import { combineReducers } from 'redux';
import npiReducer from './npi'
const rootReducer = combineReducers({
  npi: npiReducer,
})

export default rootReducer;