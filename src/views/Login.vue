<template>
	<div class="login">
		<!-- 1.0 关闭图标 -->

		<span class="close-btn"><i class="iconicon-test iconfont"></i></span>
		<!-- 2.0 Logo 图标 -->
		<h2 class="logo"><i class="iconnew iconfont"></i></h2>

		<!-- 3.0 输入框 -->
		<!-- / ^1\d{10}$ | ^[a-zA-Z]\w{2,10}$ | ^1\d{4,5}$ / -->
		<!-- 
			^1 - 1开头 
			\d{10}$ - 10个数字结尾
			
			^[a-zA-Z] - 字母开头
			\w{2,10}$ - 2~10个字符结尾
			
			\d{4,5}$ - 4~5个数字结尾
		-->

		<MyInput
			v-model="user.username"
			placeholder="用户名 / 手机号码"
			:rules="/^1\d{10}$|^[a-zA-Z]\w{2,10}$|^1\d{4,5}$/"
			msg="非法用户名"
		></MyInput>
		<MyInput
			v-model="user.password"
			placeholder="密码"
			type="password"
			:rules="/^[\w~!@#$%^&*()+=]{3,18}$/"
			msg="非法密码"
		></MyInput>

		<!-- 4.0 一个注册提示 -->
		<router-link class="tips" to="/register">没有账号？去注册</router-link>

		<!-- 5.0 登录按钮 -->
		<MyButton @click="loginFn" type="danger">登录</MyButton>
	</div>
</template>

<script>
// 自定义组件使用步骤：  新建/导入/注册/使用
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { userLoginAPI } from '@/api/user';
export default {
	data() {
		return {
			user: {
				username: '',
				password: ''
			}
		};
	},
	components: {
		MyButton,
		MyInput
	},
	methods: {
		async loginFn(e) {
			const result = (await userLoginAPI({
				// 请求接口参数的键名称，必须按接口文档要求来
				username: this.user.username,
				password: this.user.password
			})).data;
			console.log(result);
		}
	}
};
</script>

<style lang="less" scoped>
.close-btn {
	position: fixed;
	left: 20px;
	top: 20px;
	.iconfont {
		font-size: 20px;
		color: #666;
	}
}
.logo {
	display: flex;
	justify-content: center;
	padding: 80px 0 20px;
	.iconfont {
		color: #d81e06;
		font-size: 120px;
	}
}
.tips {
	padding: 0 30px;
	text-align: right;
	display: block;
	text-decoration: none;
}
</style>
