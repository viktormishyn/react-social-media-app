import * as axios from "axios";


export const getUsers = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => response.data)
    // chain of promises in order to minimize information passed to the component
    // literally
    //     .then(response => {
    //         return response.data
    //     })
}
