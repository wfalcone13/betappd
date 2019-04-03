import {combineReducers} from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
 entities: entities,
 session: session,
//  ui: ui,
 errors: errors
})

export default rootReducer;