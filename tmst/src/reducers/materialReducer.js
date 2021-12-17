//Created by [rxreducer] snippet

import {
    ADD_MATERIAL_FULFILLED, ADD_MATERIAL_PENDING, ADD_MATERIAL_REJECTED,
    GET_MATERIAL_FULFILLED, GET_MATERIAL_PENDING, GET_MATERIAL_REJECTED,
    UPDATE_MATERIAL_FULFILLED, UPDATE_MATERIAL_PENDING, UPDATE_MATERIAL_REJECTED,
    DELETE_MATERIAL_FULFILLED, DELETE_MATERIAL_PENDING, DELETE_MATERIAL_REJECTED,
    FETCH_MATERIAL_FULFILLED, FETCH_MATERIAL_PENDING, FETCH_MATERIAL_REJECTED
} from "../actions/materialActions";

const initialState = {
    material: [],newMaterial:{}, error: {}, loading: false, done: false, gotMaterial: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        //type==ADD_MATERIAL
        case ADD_MATERIAL_PENDING:
            return { ...state, loading: true, done: false }
        case ADD_MATERIAL_FULFILLED:
            return { ...state, newMaterial: payload, loading: false, done: true }
        case ADD_MATERIAL_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type==UPDATE_MATERIAL
        case UPDATE_MATERIAL_PENDING:
            return { ...state, loading: true, done: false }
        case UPDATE_MATERIAL_FULFILLED:
            return { ...state, material: payload, loading: false, done: true }
        case UPDATE_MATERIAL_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== GET_MATERIAL 
        case GET_MATERIAL_PENDING:
            return { ...state, loading: true, done: false }
        case GET_MATERIAL_FULFILLED:
            //console.log("From gotMaterial=>",payload);
            return { ...state, gotMaterial: payload, loading: false, done: true }
        case GET_MATERIAL_REJECTED:
            return { ...state, error: payload, loading: false, done: false }

        //type== FETCH_MATERIAL 
        case FETCH_MATERIAL_PENDING:
            return { ...state, loading: true }
        case FETCH_MATERIAL_FULFILLED:
            return { ...state, material: payload, loading: false }
        case FETCH_MATERIAL_REJECTED:
            return { ...state, error: payload, loading: false }

        //type== DELETE_MATERIAL 
        case DELETE_MATERIAL_PENDING:
            return { ...state, loading: true, done: false }
        case DELETE_MATERIAL_FULFILLED:
            //console.log("From Action=>",payload.id);
            //console.log("From State=>",state.material);
            //console.log("From State New=>",state.material.filter(i => i._id !== payload.id));
            return {
                ...state
                , material: state.material.filter(i => i._id !== payload.id)//Silinen ögeyi state den çıkarıyoruz.
                , loading: false, done: true
            }
        case DELETE_MATERIAL_REJECTED:
            return { ...state, error: payload, loading: false, done: false }
        default:
            return state
    }
}