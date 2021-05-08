import {requests} from "../requests";

//获取当前用户信息
export function userProfile() {
    return requests({
        url:'/v1/curr/user',
        method:'get'
    })
}
//修该当前用户信息
export  function updateUserProfile(file) {
    console.log(file);
    return requests({
        url:'/v1/curr/user',
        method:'patch',
        // headers:{
        //     'Content-Type':'multipart/form-data'
        // },
        data:file
    })
}