// user api
import request from '@/utils/request.js'

// 登录
export const userLoginAPI = params => request({
	method: 'POST',
	url: '/login',
	params
})

// 注册
export const userRegisterAPI = params => request({
	method: 'POST',
	url: '/register',
	params
})
