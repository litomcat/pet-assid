//封装axios 网络请求
import theAxios from 'axios'
const axios = theAxios.create({
    baseURL:'http://toutiao.itheima.net',
    timeout:2000 //请求20秒无响应判断超时
})

export default ({ url, method = 'GET', params = {}, data = {}, headers = {}}) => {
    return axios({
        url,
        method,
        params,
        data,
        headers
    })

}