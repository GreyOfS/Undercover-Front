import Cookies from "universal-cookie";

const cookie = new Cookies();
const initDark = (cookie.get('dark') ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) === 'true' ? true : false;

const expiresDate = new Date();
expiresDate.setDate(expiresDate.getDate() + 365);

export const initialState = {
    dark: initDark
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            cookie.set('dark', !state.dark, {path: '/', expires: expiresDate});
            return {
                ...state,
                dark: !state.dark
            }

        default:
            cookie.set('dark', state.dark, {path: '/', expires: expiresDate});
            return state;
    }
};

export default reducer;