import axios from 'axios'
import { API_BASE } from '../config/env';

export const FETCH_WAREHOUSE_PENDING = "FETCH_WAREHOUSE_PENDING"
export const FETCH_WAREHOUSE_FULFILLED = "FETCH_WAREHOUSE_FULFILLED"
export const FETCH_WAREHOUSE_REJECTED = "FETCH_WAREHOUSE_REJECTED"

export const GET_WAREHOUSE_PENDING = "GET_WAREHOUSE_PENDING"
export const GET_WAREHOUSE_FULFILLED = "GET_WAREHOUSE_FULFILLED"
export const GET_WAREHOUSE_REJECTED = "GET_WAREHOUSE_REJECTED"

export const ADD_WAREHOUSE_PENDING = "ADD_WAREHOUSE_PENDING"
export const ADD_WAREHOUSE_FULFILLED = "ADD_WAREHOUSE_FULFILLED"
export const ADD_WAREHOUSE_REJECTED = "ADD_WAREHOUSE_REJECTED"

export const UPDATE_WAREHOUSE_PENDING = "UPDATE_WAREHOUSE_PENDING"
export const UPDATE_WAREHOUSE_FULFILLED = "UPDATE_WAREHOUSE_FULFILLED"
export const UPDATE_WAREHOUSE_REJECTED = "UPDATE_WAREHOUSE_REJECTED"

export const DELETE_WAREHOUSE_PENDING = "DELETE_WAREHOUSE_PENDING"
export const DELETE_WAREHOUSE_FULFILLED = "DELETE_WAREHOUSE_FULFILLED"
export const DELETE_WAREHOUSE_REJECTED = "DELETE_WAREHOUSE_REJECTED"


//GET ALL
export function fetchWarehouses(){
    return dispatch => {
        dispatch({type:"FETCH_WAREHOUSE",
        payload:axios.get(`${API_BASE}/warehouses`).then(res=>res.data)})    
    }
}

//GET ANYONE
export function getWarehouse(id){
    return dispatch => {
        dispatch({type:"GET_WAREHOUSE",
        payload:axios.get(`${API_BASE}/warehouses/${id}`).then(res=>res.data)})    
    }
}
//DELETE
export function deleteWarehouse(id){
    return dispatch => {
        dispatch({type:"DELETE_WAREHOUSE",
        payload:axios.delete(`${API_BASE}/warehouses/${id}`)
        .then(res=>Object.assign({},res.data,{id}))})    
    }
}
//UPDATE
export function updateWarehouse({_id,name}){
    return dispatch => {
        dispatch(
            {
                type:"UPDATE_WAREHOUSE",
                payload:axios.put(`${API_BASE}/warehouses/${_id}`,{Name:name})
            }
        )
    }
}
//ADD
export function addNewWarehouse({name}){
    return dispatch => {
        dispatch(
            {
                type:"ADD_WAREHOUSE",
                payload:axios.post(`${API_BASE}/warehouses`,{Name:name})
            }
        )
    }
}