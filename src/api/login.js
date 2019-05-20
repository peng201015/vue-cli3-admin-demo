// import axios from '@/utils/require'
import axios from 'axios'
const login = {
  handleLogin(params) {
    return axios.post('/login', params).then(res => res.data);
  }
  // handleLogin(params) {
  //   return axios.post("/login", params).then(res => res)
  // }
}
export default login