import axios from "./axios"
import qs from "qs";

export default {
  get: function(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: params
        })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post: function(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params))
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err)
        })
    });
  }
}