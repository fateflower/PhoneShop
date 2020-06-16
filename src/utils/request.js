import axios from "axios";
import { getToken } from "./auth.js";
const instance = axios.create({
	timeout:10000,
	baseURL:"http://api.cat-shop.penkuoer.com"
})
// Add a request interceptor
// 全局请求拦截，作用是当所有的ajax请求发起之前先执行这个方法
//  用来设置请求头等信息的
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // console.log(config);
    // 在发起请求之前在请求头中设置token值
    config.headers.authorization = "bearer " + getToken();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
//  全局响应拦截，所有的ajax请求成功返回之后会走这个方法
//    做异常处理
//    比如 404，503， 401
instance.interceptors.response.use(
  function(response) {
    // console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("报错了");
    // console.dir(error);
    // 当服务器返回401状态码的时候跳转到登录页
    if (error.response.status == 401) {
		localStorage.removeItem("token")
		window.location.href = "#/login";
    }
    return Promise.reject(error);
  }
);
export function get(url,params){
	return instance.get(url,{
		params
	})
}

export function post(url,data){
	return instance.post(url,data)
}

export function put(url,data){
	return instance.put(url,data)
}
export function del(url){
	return instance.delete(url)
}
