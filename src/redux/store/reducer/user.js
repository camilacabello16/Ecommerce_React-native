import { SIGN_IN_USER, LOG_OUT_USER } from "../action/user";
import UserInfo from '../../userInfo';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_USER:
            const userInfo = action.user;

            let cloneState = [...state];

            cloneState.push(userInfo);
            state = cloneState;
            return state;
        case LOG_OUT_USER:
            let cloneState = [...state];

            cloneState.splice(-1, 1);
            state = cloneState;
            return state;
    }
    return state;
};