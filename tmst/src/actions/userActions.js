import axios from 'axios'
import { API_BASE } from '../config/env';

export const FETCH_USER_PENDING = "FETCH_USER_PENDING"
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED"
export const FETCH_USER_REJECTED = "FETCH_USER_REJECTED"

export const GET_USER_PENDING = "GET_USER_PENDING"
export const GET_USER_FULFILLED = "GET_USER_FULFILLED"
export const GET_USER_REJECTED = "GET_USER_REJECTED"

export const ADD_USER_PENDING = "ADD_USER_PENDING"
export const ADD_USER_FULFILLED = "ADD_USER_FULFILLED"
export const ADD_USER_REJECTED = "ADD_USER_REJECTED"

export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING"
export const UPDATE_USER_FULFILLED = "UPDATE_USER_FULFILLED"
export const UPDATE_USER_REJECTED = "UPDATE_USER_REJECTED"

export const DELETE_USER_PENDING = "DELETE_USER_PENDING"
export const DELETE_USER_FULFILLED = "DELETE_USER_FULFILLED"
export const DELETE_USER_REJECTED = "DELETE_USER_REJECTED"

/*Without REDUX PROMISE MIDDLEWARE */
/*export function fetchUsers(){
    return dispatch => {
        axios.get(`${API_BASE}/users`)
        .then(res=>res.data)
        .then(result=>dispatch({type:FETCH_USER,payload:result}))
        .catch(err=>dispatch({type:FETCH_USER_ERRORS,payload:err}))        
    }
}*/

/*With REDUX PROMISE MIDDLEWARE */
//GET ALL
export function fetchUsers(){
    return dispatch => {
        dispatch({type:"FETCH_USER",
        payload:axios.get(`${API_BASE}/users`).then(res=>res.data)})    
    }
}

//GET ANYONE
export function getUser(id){
    return dispatch => {
        dispatch({type:"GET_USER",
        payload:axios.get(`${API_BASE}/users/${id}`).then(res=>res.data)})    
    }
}
//DELETE
export function deleteUser(id){
    return dispatch => {
        dispatch({type:"DELETE_USER",
        payload:axios.delete(`${API_BASE}/users/${id}`)
        .then(res=>Object.assign({},res.data,{id}))})    
    }
}
//UPDATE
export function updateUser({_id,name,surname,job,username}){
    return dispatch => {
        dispatch(
            {
                type:"UPDATE_USER",
                payload:axios.put(`${API_BASE}/users/${_id}`,{Name:name,Surname:surname,Job:job,Username:username})
            }
        )
    }
}
//ADD
export function addNewUser({name,surname,job,username}){
    return dispatch => {
        dispatch(
            {
                type:"ADD_USER",
                payload:axios.post(`${API_BASE}/users`,{Name:name,Surname:surname,Job:job,Username:username })
            }
        )
    }
}