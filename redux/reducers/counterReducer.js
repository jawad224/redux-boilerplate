import * as actions from '../actions';




const counterReducer = (state = { value: 0, obj: {} }, action) => {
    switch (action.type) {
        case actions.INCREMENT_COUNTER:
            return { ...state, value: state.value + 1 };
        case actions.DECREMENT_COUNTER:
            return { ...state, value: state.value - 1 };
        case actions.RESET_COUNTER:
            return { ...state, value: 0 };

        case actions.auth:
            console.log("auth is call in reducer", action.payload, "type", action.type)
            return { ...state, obj: action.payload };




        default:
            return { ...state };
    }
};

export default counterReducer;


