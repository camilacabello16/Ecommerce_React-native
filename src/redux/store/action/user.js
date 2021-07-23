export const SIGN_IN_USER = 'SIGN_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';

export const signInUser = (user) => {
    return { type: SIGN_IN_USER, user: user };
}

export const logOutUser = () => {
    return { type: LOG_OUT_USER};
}