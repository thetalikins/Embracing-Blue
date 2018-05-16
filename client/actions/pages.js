import request from 'superagent'
import authRequest from '../utils/api'



export const receivePageAction = (page) => {
    return {
        type: 'RECEIVE_PAGE',
        page
    }
}


export const editPageAction = (page) => {
    return {
        type: 'EDIT_PAGE',
        page
    }
}



export function apiGetResourcesPage(page) {
    return (dispatch) => {
        authRequest('get', `resources/${page.id}`)
            .then(res => {    
                dispatch(receivePageAction(res.body))
            }).catch(err => {
                console.error(err.message)
            })
    }
}


export function apiEditResourcesPage(page) {
    return (dispatch) => {
        authRequest('put', `${page.id}`, page)
            .then(res => {
                dispatch(editPageAction(page))
            })
            .catch(err => {
                console.error(err.message)
            })
    }
}


export function apiGetIdentitiesPage(page) {
    return (dispatch) => {
        authRequest('get', `identities/${page.id}`)
            .then(res => {    
                dispatch(receivePageAction(res.body))
            }).catch(err => {
                console.error(err.message)
            })
    }
}


export function apiEditIdentitiesPage(page) {
    return (dispatch) => {
        authRequest('put', `${page.id}`, page)
            .then(res => {
                dispatch(editPageAction(page))
            })
            .catch(err => {
                console.error(err.message)
            })
    }
}

