import {
    ADD_WAREHOUSE_FULFILLED, ADD_WAREHOUSE_PENDING, ADD_WAREHOUSE_REJECTED,
    GET_WAREHOUSE_FULFILLED, GET_WAREHOUSE_PENDING, GET_WAREHOUSE_REJECTED,
    UPDATE_WAREHOUSE_FULFILLED, UPDATE_WAREHOUSE_PENDING, UPDATE_WAREHOUSE_REJECTED,
    DELETE_WAREHOUSE_FULFILLED, DELETE_WAREHOUSE_PENDING, DELETE_WAREHOUSE_REJECTED,
    FETCH_WAREHOUSE_FULFILLED, FETCH_WAREHOUSE_PENDING, FETCH_WAREHOUSE_REJECTED
} from "../actions/warehouseActions";

const initialState = {
    warehouse: [],newWarehouse:{}, error: {}, loading: false, done: false, gotWarehouse: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //type==ADD_WAREHOUSE
        case ADD_WAREHOUSE_PENDING:
            return { ...state, loading: true, done: false }
        case ADD_WAREHOUSE_FULFILLED:
            return { ...state, newWarehouse: payload, loading: false, done: true }
        case ADD_WAREHOUSE_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type==UPDATE_WAREHOUSE
        case UPDATE_WAREHOUSE_PENDING:
            return { ...state, loading: true, done: false }
        case UPDATE_WAREHOUSE_FULFILLED:
            return { ...state, newWarehouse: payload, loading: false, done: true }
        case UPDATE_WAREHOUSE_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== GET_WAREHOUSE 
        case GET_WAREHOUSE_PENDING:
            return { ...state, loading: true, done: false }
        case GET_WAREHOUSE_FULFILLED:
            return { ...state, gotWarehouse: payload, loading: false, done: true }
        case GET_WAREHOUSE_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== FETCH_WAREHOUSE 
        case FETCH_WAREHOUSE_PENDING:
            return { ...state, loading: true }
        case FETCH_WAREHOUSE_FULFILLED:
            return { ...state, warehouse: payload, loading: false }
        case FETCH_WAREHOUSE_REJECTED:
            return { ...state, error: payload, loading: false }

        //type== DELETE_WAREHOUSE 
        case DELETE_WAREHOUSE_PENDING:
            return { ...state, loading: true, done: false }
        case DELETE_WAREHOUSE_FULFILLED:
            return {
                ...state
                , warehouse: state.warehouse.filter(i => i._id !== payload.id)
                , loading: false, done: true
            }
        case DELETE_WAREHOUSE_REJECTED:
            return { ...state, error: payload, loading: false, done: false }
        default:
            return state
    }
}