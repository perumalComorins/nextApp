import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));
export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    register,
    getAll,
    getAllStatic,
    getJobLocation,
    getJobLists,
    getById,
    update,
    delete: _delete,
    addItem,
    getLimit,
    getService,
    getHeaderCount,
    getClone,
    visible,
    setLanguage,
    addFormItem,
    musicupdate,
    getAllMasterData,
    addMasterData,
    fetchService_groups,
    fetchsolution_list
};

function fetchService_groups(type, params) {
    return fetchWrapper.post(`${baseUrl}/${type}`)
        .then(x => {
             return x;
    });
}
function fetchsolution_list(type, slug) {

    return fetchWrapper.post(`${baseUrl}/${type}`,slug)
        .then(x => {
             return x;
    });
}
function login(username, password) {
    return fetchWrapper.post(`${baseUrl}/login`, { 'email':username, 'password': password })
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            if(localStorage.getItem('lang')==undefined){
            localStorage.setItem('lang', 'en');
            }else{
                localStorage.setItem('lang', localStorage.getItem('lang'));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/account/login');
}

function setLanguage(lang){
    localStorage.setItem('lang', lang);
}

function register(user) {
    return fetchWrapper.post(`${baseUrl}/register`, user)
        .then(user => {
            userSubject.next(null);
            Router.push('/account/login');
        });
}

function addItem(type) {
    //alert(type)
    return fetchWrapper.post(`${baseUrl}/crud/${type}`,'')
        .then(user => {
            return user.data;
        });
}
function addFormItem(type,data) {
    //alert(type)
    return fetchWrapper.posts(`${baseUrl}/crud/${type}`,data)
        .then(user => {
            return user.data;
        });
}

function getLimit(type) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.post(`${baseUrl}/crud/${type}/list/3`,'')
        .then(user => {
           return user.data
        });
}
{/** Ramji admin base url 
function getAll(type) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.post(`${baseUrl}/crud/${type}/show_all_list`,'')
        .then(user => {
           return user.data
        });
}**/}

function getAll(type) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.post(`${baseUrl}/${type}/show_all_list`)
        .then(user => {
           return user.data
        });
}
function getAllStatic(type, data) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.post(`${baseUrl}/${type}/show_all_list`,data)
        .then(user => {
           return user.data
        });
}

function getJobLocation(type,data) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.posts(`${baseUrl}/${type}/show_all_list`,data)
        .then(user => {
           return user.data
        });
}
function getJobLists(type,data) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.posts(`${baseUrl}/${type}/show_all_list`,data)
        .then(user => {
           return user.data
        });
}

function addMasterData(type,data) {
    //alert(type)
    return fetchWrapper.posts(`${baseUrl}/crud/${type}`,data)
        .then(user => {
            return user.data;
        });
}
function getAllMasterData(type,data) {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.post(`${baseUrl}/crud/${type}/show_all_list`,data)
        .then(user => {
           return user.data
        });
}
function getService() {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.get(`${baseUrl}/crud/service/all_service_list`,'')
        .then(user => {
           return user.data
        });
}
function getHeaderCount() {
    //return fetchWrapper.get(baseUrl);
    return fetchWrapper.get(`${baseUrl}/crud/solution/count_all_list`)
        .then(user => {
           return user.data
        });
}
function getById(type,data) {

    return fetchWrapper.post(`${baseUrl}/crud/${type}/view`,data)
        .then(user=>{
            return user.data;
        })
}

function getClone(type,id) {
    return fetchWrapper.post(`${baseUrl}/crud/${type}/clone/${id}`)
        .then(user=>{
            return user.data;
        })
}
function visible(type,id,status) {
    return fetchWrapper.put(`${baseUrl}/crud/${type}/${status}/${id}`)
        .then(user=>{
            return user.data;
        })
}

function update(type, params,types,id,status) {
    if(status=='0'){
    return fetchWrapper.posts(`${baseUrl}/crud/${type}/update`, params)
        .then(x => {


             return x;
        });
    }else{
        return fetchWrapper.publish(`${baseUrl}/crud/${type}/publish`, params)
        .then(x => {

             return x;
        });
    }
}

function musicupdate(type, params) {

    return fetchWrapper.posts(`${baseUrl}/crud/${type}/update`, params)
        .then(x => {
             return x;
        });

}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(type,id) {
    return fetchWrapper.delete(`${baseUrl}/crud/${type}/${id}`);
}
