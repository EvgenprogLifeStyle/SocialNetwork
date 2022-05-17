import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '49bc418b-fd7c-4c82-b5f5-ce56b5a10082'
    }
})
export const usersApi = {
    getUsers: (currentPage, pageSize) =>
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data),
    deleteUsersFollow: (userId) =>
        instance.delete(`follow/${userId}`)
            .then(response => response.data),
    postUsers: (userId) =>
        instance.post(`follow/${userId}`, {})
            .then(response => response.data)
}

export const headerApi = {
    login: () => instance.get(`auth/me`)
        .then(response => response.data)


}

export const profile = {
    dataUser: (userId) =>
        instance.get(`profile/${userId}`)
            .then(response => response.data)
}
// export const getFollowApi = (id) =>
//     instance.pos(`/follow/${id}`)
//         .then(response => response.data)
//
