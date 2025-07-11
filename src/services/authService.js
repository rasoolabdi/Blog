const { default: http } = require("./httpService");


export function signupApi(data) {
    return http.post("/user/signup" , data).then(({ data }) => data.data)
};

export function signinApi(data) {
    return http.post("/user/signin" , data).then(({ data }) => data.data);
};

export function getUserApi() {
    return http.get("/user/profile").then(({ data }) => data.data);
};

export function getAllUsersApi(options) {
    return http.get("/user/list" , options).then(({ data }) => data.data)
};
