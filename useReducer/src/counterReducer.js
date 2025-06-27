const initialState = {
    count : 0
};


function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'RESET':
            return {
                ...state,
                count: 0
            };
        case 'ADD':
            return {
                ...state,
                count: state.count + action.payload
                
            };
        case 'SUBTRACT':
            return {
                ...state,
                count: state.count - action.payload
            };
        default:
            return state;
    }
}

export {counterReducer, initialState};