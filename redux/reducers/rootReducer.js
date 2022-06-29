import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    datacount: counterReducer
});

export default rootReducer;
