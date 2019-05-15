const TokenKey = 'token'
const AuthKey = 'Auth'
const AuthName = 'userName'
const auth = {
    /*获取token*/
    getToken: function() {
        return sessionStorage.getItem(TokenKey);
    },
    /*设置token*/
    setToken: function() {
        return sessionStorage.setItem(TokenKey, uid);
    },
    /*移除token*/
    removeToken: function() {
        return sessionStorage.removeItem(TokenKey);
    },
    /*设置权限表*/
    setAuth: function() {
        list = JSON.stringify(list)
        return sessionStorage.setItem(AuthKey, list);
    },
    /*获取权限表*/
    getAuth: function() {
        return JSON.parse(sessionStorage.getItem(AuthKey));
    },
    /*删除权限表*/
    removeAuth: function() {
        return sessionStorage.removeItem(AuthKey);
    }
}
export default auth