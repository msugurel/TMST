import {
    ADD_STOCKPROCESS_FULFILLED, ADD_STOCKPROCESS_PENDING, ADD_STOCKPROCESS_REJECTED,
    GET_STOCKPROCESS_FULFILLED, GET_STOCKPROCESS_PENDING, GET_STOCKPROCESS_REJECTED,
    UPDATE_STOCKPROCESS_FULFILLED, UPDATE_STOCKPROCESS_PENDING, UPDATE_STOCKPROCESS_REJECTED,
    DELETE_STOCKPROCESS_FULFILLED, DELETE_STOCKPROCESS_PENDING, DELETE_STOCKPROCESS_REJECTED,
    FETCH_STOCKPROCESS_FULFILLED, FETCH_STOCKPROCESS_PENDING, FETCH_STOCKPROCESS_REJECTED
} from "../actions/stockprocessActions";

const initialState = {
    stockprocess: [],newStockprocess:{}, error: {}, loading: false, done: false, gotStockprocess: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //type==ADD_STOCKPROCESS
        case ADD_STOCKPROCESS_PENDING:
            return { ...state, loading: true, done: false }
        case ADD_STOCKPROCESS_FULFILLED:
            return { ...state, newStockprocess: payload, loading: false, done: true }
        case ADD_STOCKPROCESS_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type==UPDATE_STOCKPROCESS
        case UPDATE_STOCKPROCESS_PENDING:
            return { ...state, loading: true, done: false }
        case UPDATE_STOCKPROCESS_FULFILLED:
            return { ...state, newStockprocess: payload, loading: false, done: true }
        case UPDATE_STOCKPROCESS_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== GET_STOCKPROCESS 
        case GET_STOCKPROCESS_PENDING:
            return { ...state, loading: true, done: false }
        case GET_STOCKPROCESS_FULFILLED:
            return { ...state, gotStockprocess: payload, loading: false, done: true }
        case GET_STOCKPROCESS_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== FETCH_STOCKPROCESS 
        case FETCH_STOCKPROCESS_PENDING:
            return { ...state, loading: true }
        case FETCH_STOCKPROCESS_FULFILLED:
            return { ...state, stockprocess: payload, loading: false }
        case FETCH_STOCKPROCESS_REJECTED:
            return { ...state, error: payload, loading: false }

        //type== DELETE_STOCKPROCESS 
        case DELETE_STOCKPROCESS_PENDING:
            return { ...state, loading: true, done: false }
        case DELETE_STOCKPROCESS_FULFILLED:
            return {
                ...state
                , stockprocess: state.stockprocess.filter(i => i._id !== payload.id)
                , loading: false, done: true
            }
        case DELETE_STOCKPROCESS_REJECTED:
            return { ...state, error: payload, loading: false, done: false }
        default:
            return state
    }
}