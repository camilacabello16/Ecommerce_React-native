import { SIGN_IN_USER, LOG_OUT_USER } from "../action/user";
import UserInfo from '../../userInfo';

const initialState = {
    users: {},
    login: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_USER:
            const user = action.user;
            const username = user.UserName;
            const password = user.Password;
            const fullName = user.Fullname;

            let userInfoLogin = new UserInfo(
                username,
                password,
                fullName,
            )
            return {
                ...state,
                users: {...state.users, [0]: userInfoLogin,},
                login: true,
            }
        case LOG_OUT_USER:
            const updateUsers = [...state.users];
             delete updateUsers[0];
            return {
                ...state,
                users: updateUsers,
                login: false,
            };
    }
    return state;
};