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
        case 'SET_DENTISTS':
            return {
                ...state,
                data: action.payload
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default globalContextReducer;
