import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs' // 引入mockjs
import {
  LoginUsers,
  data
} from "./user"

export default {
  init() {
    let mockAda = new MockAdapter(axios);
    mockAda.onPost('/login').reply(config => {
      let {
        name,
        password
      } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username == name && u.password == password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            } else {
              return false
            }
          })

          if (hasUser) {
            resolve([200, {
              code: 200,
              msg: '请求成功',
              user
            }]);
          } else {
            resolve([200, {
              code: 500,
              msg: '账号或密码错误'
            }]);
          }
        }, 1000);
      })
    })
  }
}