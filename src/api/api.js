import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9e3180b2-f063-4bf9-91e8-b9e70d7475c7"
    }
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    // chain of promises in order to minimize information passed to the component
    // literally
    //     .then(response => {
    //         return response.data
    //     })
}
