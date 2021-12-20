//Created by [rxreducer] snippet

import {
    ADD_STOCK_FULFILLED, ADD_STOCK_PENDING, ADD_STOCK_REJECTED,
    GET_STOCK_FULFILLED, GET_STOCK_PENDING, GET_STOCK_REJECTED,
    UPDATE_STOCK_FULFILLED, UPDATE_STOCK_PENDING, UPDATE_STOCK_REJECTED,
    DELETE_STOCK_FULFILLED, DELETE_STOCK_PENDING, DELETE_STOCK_REJECTED,
    FETCH_STOCK_FULFILLED, FETCH_STOCK_PENDING, FETCH_STOCK_REJECTED
} from "../actions/stockActions";

const initialState = {
    stock: [],newStock:{}, error: {}, loading: false, done: false, gotStock: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //type==ADD_STOCK
        case ADD_STOCK_PENDING:
            return { ...state, loading: true, done: false }
        case ADD_STOCK_FULFILLED:
            return { ...state, newStock: payload, loading: false, done: true }
        case ADD_STOCK_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type==UPDATE_STOCK
        case UPDATE_STOCK_PENDING:
            return { ...state, loading: true, done: false }
        case UPDATE_STOCK_FULFILLED:
            return { ...state, newStock: payload, loading: false, done: true }
        case UPDATE_STOCK_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== GET_STOCK 
        case GET_STOCK_PENDING:
            return { ...state, loading: true, done: false }
        case GET_STOCK_FULFILLED:
            //console.log("From gotStock=>",payload);
            return { ...state, gotStock: payload, loading: false, done: true }
        case GET_STOCK_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== FETCH_STOCK 
        case FETCH_STOCK_PENDING:
            return { ...state, loading: true }
        case FETCH_STOCK_FULFILLED:
            return { ...state, stock: payload, loading: false }
        case FETCH_STOCK_REJECTED:
            return { ...state, error: payload, loading: false }

        //type== DELETE_STOCK 
        case DELETE_STOCK_PENDING:
            return { ...state, loading: true, done: false }
        case DELETE_STOCK_FULFILLED:
            //console.log("From Action=>",payload.id);
            //console.log("From State=>",state.stock);
            //console.log("From State New=>",state.stock.filter(i => i._id !== payload.id));
            return {
                ...state
                , stock: state.stock.filter(i => i._id !== payload.id)//Silinen ögeyi state den çıkarıyoruz.
                , loading: false, done: true
            }
        case DELETE_STOCK_REJECTED:
            return { ...state, error: payload, loading: false, done: false }
        default:
            return state
    }
}