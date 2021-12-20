import axios from 'axios'
import { API_BASE } from '../config/env';

export const FETCH_STOCK_PENDING = "FETCH_STOCK_PENDING"
export const FETCH_STOCK_FULFILLED = "FETCH_STOCK_FULFILLED"
export const FETCH_STOCK_REJECTED = "FETCH_STOCK_REJECTED"

export const GET_STOCK_PENDING = "GET_STOCK_PENDING"
export const GET_STOCK_FULFILLED = "GET_STOCK_FULFILLED"
export const GET_STOCK_REJECTED = "GET_STOCK_REJECTED"

export const ADD_STOCK_PENDING = "ADD_STOCK_PENDING"
export const ADD_STOCK_FULFILLED = "ADD_STOCK_FULFILLED"
export const ADD_STOCK_REJECTED = "ADD_STOCK_REJECTED"

export const UPDATE_STOCK_PENDING = "UPDATE_STOCK_PENDING"
export const UPDATE_STOCK_FULFILLED = "UPDATE_STOCK_FULFILLED"
export const UPDATE_STOCK_REJECTED = "UPDATE_STOCK_REJECTED"

export const DELETE_STOCK_PENDING = "DELETE_STOCK_PENDING"
export const DELETE_STOCK_FULFILLED = "DELETE_STOCK_FULFILLED"
export const DELETE_STOCK_REJECTED = "DELETE_STOCK_REJECTED"


//GET ALL
export function fetchStocks(){
    return dispatch => {
        dispatch({type:"FETCH_STOCK",
        payload:axios.get(`${API_BASE}/stocks/all`).then(res=>res.data)})    
    }
}

//GET ANYONE
export function getStock(id){
    return dispatch => {
        dispatch({type:"GET_STOCK",
        payload:axios.get(`${API_BASE}/stocks/${id}`).then(res=>res.data)})    
    }
}
//DELETE
export function deleteStock(id){
    return dispatch => {
        dispatch({type:"DELETE_STOCK",
        payload:axios.delete(`${API_BASE}/stocks/${id}`)
        .then(res=>Object.assign({},res.data,{id}))})    
    }
}
//UPDATE
export function updateStock({_id,name}){
    return dispatch => {
        dispatch(
            {
                type:"UPDATE_STOCK",
                payload:axios.put(`${API_BASE}/stocks/${_id}`,{Name:name})
            }
        )
    }
}
//ADD
export function addNewStock({name}){
    return dispatch => {
        dispatch(
            {
                type:"ADD_STOCK",
                payload:axios.post(`${API_BASE}/stocks`,{Name:name})
            }
        )
    }
}