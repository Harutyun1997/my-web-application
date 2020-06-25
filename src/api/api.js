import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3004/'
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users', {
            params: {
                _page: currentPage,
                _limit: pageSize
            }
        })
    },
    toggleFollow(userDataId, userData) {
        return instance.put(`users/${userDataId}`, {
            ...userData
        }).then(resolve => resolve.data);
    }
};

export const ProfileAPI = {
    getUser(userID) {
        return instance.get('users', {
            params: {
                id: userID
            }
        }).then(resolve => resolve.data[0]);
    },

    updateStatus(userDataId, userData) {
        return instance.put(`users/${userDataId}`, {
            ...userData
        }).then(resolve => resolve.data);
    },

    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);


        return axios({
            method: 'post',
            url: 'http://localhost:8080/fileupload',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (response) {
            //handle success
            console.log(response);
        })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
};

export const Login = {
    sigIn(email, password) {
        return instance.get('users', {
            params: {
                email: email,
                password: password,
            }
        }).then(resolve => resolve.data);
    },

    sigUp(data) {
        return instance.post('users', {
            ...data
        }).then(resolve => resolve.data);
    }
};

export const authAPI = {
    me() {
        return JSON.parse(localStorage.getItem('userData'));
    }
};




