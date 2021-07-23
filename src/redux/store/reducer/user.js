import {SIGN_IN_USER, LOG_OUT_USER} from '../action/user';
import UserInfo from '../../userInfo';

const initialState = {
  userId: '',
  userName: '',
  password: '',
  fullName: '',
  login: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      const user = action.user;
      const username = user.UserName;
      const password = user.Password;
      const fullName = user.Fullname;
      const userId = user.UserId;

      // let userInfoLogin = new UserInfo(
      //     username,
      //     password,
      //     fullName,
      //     userId
      // );

      return {
        ...state,
        // users: {...state.users, [user.UserId]: userInfoLogin,},
        userId: userId,
        userName: username,
        password: password,
        fullName: fullName,
        login: true,
      };
    case LOG_OUT_USER:
      // const updateUsers = [...state.users];
      // delete updateUsers[action.userId];
      // console.log(updateUsers);
      // return {
      //     ...state,
      //     users: updateUsers,
      //     login: false,
      // };
      return {
        ...state,
        userId: '',
        userName: '',
        password: '',
        fullName: '',
        login: false,
      };
  }
  return state;
};
