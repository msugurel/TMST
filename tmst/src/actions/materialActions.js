import axios from 'axios'
import { API_BASE } from '../config/env';

export const FETCH_MATERIAL_PENDING = "FETCH_MATERIAL_PENDING"
export const FETCH_MATERIAL_FULFILLED = "FETCH_MATERIAL_FULFILLED"
export const FETCH_MATERIAL_REJECTED = "FETCH_MATERIAL_REJECTED"

export const GET_MATERIAL_PENDING = "GET_MATERIAL_PENDING"
export const GET_MATERIAL_FULFILLED = "GET_MATERIAL_FULFILLED"
export const GET_MATERIAL_REJECTED = "GET_MATERIAL_REJECTED"

export const ADD_MATERIAL_PENDING = "ADD_MATERIAL_PENDING"
export const ADD_MATERIAL_FULFILLED = "ADD_MATERIAL_FULFILLED"
export const ADD_MATERIAL_REJECTED = "ADD_MATERIAL_REJECTED"

export const UPDATE_MATERIAL_PENDING = "UPDATE_MATERIAL_PENDING"
export const UPDATE_MATERIAL_FULFILLED = "UPDATE_MATERIAL_FULFILLED"
export const UPDATE_MATERIAL_REJECTED = "UPDATE_MATERIAL_REJECTED"

export const DELETE_MATERIAL_PENDING = "DELETE_MATERIAL_PENDING"
export const DELETE_MATERIAL_FULFILLED = "DELETE_MATERIAL_FULFILLED"
export const DELETE_MATERIAL_REJECTED = "DELETE_MATERIAL_REJECTED"

/*Without REDUX PROMISE MIDDLEWARE */
/*export function fetchMaterials(){
    return dispatch => {
        axios.get(`${API_BASE}/materials`)
        .then(res=>res.data)
        .then(result=>dispatch({type:FETCH_MATERIAL,payload:result}))
        .catch(err=>dispatch({type:FETCH_MATERIAL_ERRORS,payload:err}))        
    }
}*/

/*With REDUX PROMISE MIDDLEWARE */
//GET ALL
export function fetchMaterials(){
    return dispatch => {
        dispatch({type:"FETCH_MATERIAL",
        payload:axios.get(`${API_BASE}/materials`).then(res=>res.data)})    
    }
}

//GET ANYONE
export function getMaterial(id){
    return dispatch => {
        dispatch({type:"GET_MATERIAL",
        payload:axios.get(`${API_BASE}/materials/${id}`).then(res=>res.data)})    
    }
}
//DELETE
export function deleteMaterial(id){
    return dispatch => {
        dispatch({type:"DELETE_MATERIAL",
        payload:axios.delete(`${API_BASE}/materials/${id}`)
        .then(res=>Object.assign({},res.data,{id}))})    
    }
}
//UPDATE
export function updateMaterial({_id,name}){
    return dispatch => {
        dispatch(
            {
                type:"UPDATE_MATERIAL",
                payload:axios.put(`${API_BASE}/materials/${_id}`,{Name:name})
            }
        )
    }
}
//ADD
export function addNewMaterial({name}){
    return dispatch => {
        dispatch(
            {
                type:"ADD_MATERIAL",
                payload:axios.post(`${API_BASE}/materials`,{Name:name})
            }
        )
    }
}