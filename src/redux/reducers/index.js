import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import GetUsers from './GetUsers';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    getUsers: GetUsers
});

export default reducers;
