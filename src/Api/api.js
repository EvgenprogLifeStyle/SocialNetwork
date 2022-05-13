import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '49bc418b-fd7c-4c82-b5f5-ce56b5a10082'
    }
})

export const getUsersApi = (currentPage, pageSize) =>
    instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)

// export const getFollowApi = (id) =>
//     instance.pos(`/follow/${id}`)
//         .then(response => response.data)
//
