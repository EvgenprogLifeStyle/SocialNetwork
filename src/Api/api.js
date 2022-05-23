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
    me: () => instance.get(`auth/me`),
    login: (email, password, rememberMe) => instance.post(`auth/login`, {email, password, rememberMe}),
    logout: () => instance.delete(`auth/login`)


}

export const profile = {
    dataUser: (userId) =>
        instance.get(`profile/${userId}`)
            .then(response => response.data),
    getStatus: (userId) =>
        instance.get(`profile/status/${userId}`),

    updateStatus: (status) =>
        instance.put(`profile/status`, {status}),
    savePhoto: (photoFile) => {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile: (data) => instance.put(`profile`, data),

}
export const security = {
    captcha:()=>instance.get(`security/get-captcha-url`)
}
// export const getFollowApi = (id) =>
//     instance.pos(`/follow/${id}`)
//         .then(response => response.data)
//
