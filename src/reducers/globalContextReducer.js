const globalContextReducer = (state, action) => {
    switch (action.type) {
        case 'DARK_THEME':
            return {
                ...state,
                theme: 'dark',
            };
        case 'LIGHT_THEME':
            return {
                ...state,
                theme: 'light',
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.id !== action.payload.id),
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default globalContextReducer;
