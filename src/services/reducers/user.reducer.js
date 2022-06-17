import * as Actions from '../actions';

const initialState = {};
const user = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_USER_DATA:
            {
                return action.payload;
            }
        default:
            {
                return state
            }
    }
};

export default user;