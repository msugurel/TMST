//Created by [rxreducer] snippet

import {
    ADD_USER_FULFILLED, ADD_USER_PENDING, ADD_USER_REJECTED,
    GET_USER_FULFILLED, GET_USER_PENDING, GET_USER_REJECTED,
    UPDATE_USER_FULFILLED, UPDATE_USER_PENDING, UPDATE_USER_REJECTED,
    DELETE_USER_FULFILLED, DELETE_USER_PENDING, DELETE_USER_REJECTED,
    FETCH_USER_FULFILLED, FETCH_USER_PENDING, FETCH_USER_REJECTED
} from "../actions/userActions";

const initialState = {
    user: [],newUser:{}, error: {}, loading: false, done: false, gotUser: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //type==ADD_USER
        case ADD_USER_PENDING:
            return { ...state, loading: true, done: false }
        case ADD_USER_FULFILLED:
            return { ...state, newUser: payload, loading: false, done: true }
        case ADD_USER_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type==UPDATE_USER
        case UPDATE_USER_PENDING:
            return { ...state, loading: true, done: false }
        case UPDATE_USER_FULFILLED:
            return { ...state, newUser: payload, loading: false, done: true }
        case UPDATE_USER_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== GET_USER 
        case GET_USER_PENDING:
            return { ...state, loading: true, done: false }
        case GET_USER_FULFILLED:
            //console.log("From gotUser=>",payload);
            return { ...state, gotUser: payload, loading: false, done: true }
        case GET_USER_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== FETCH_USER 
        case FETCH_USER_PENDING:
            return { ...state, loading: true }
        case FETCH_USER_FULFILLED:
            return { ...state, user: payload, loading: false }
        case FETCH_USER_REJECTED:
            return { ...state, error: payload, loading: false }

        //type== DELETE_USER 
        case DELETE_USER_PENDING:
            return { ...state, loading: true, done: false }
        case DELETE_USER_FULFILLED:
            //console.log("From Action=>",payload.id);
            //console.log("From State=>",state.user);
            //console.log("From State New=>",state.user.filter(i => i._id !== payload.id));
            return {
                ...state
                , user: state.user.filter(i => i._id !== payload.id)//Silinen ögeyi state den çıkarıyoruz.
                , loading: false, done: true
            }
        case DELETE_USER_REJECTED:
            return { ...state, error: payload, loading: false, done: false }
        default:
            return state
    }
}