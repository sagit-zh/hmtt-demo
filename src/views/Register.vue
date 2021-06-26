<template>
	<div class="login">
		<!-- 1.0 关闭图标 -->
		<span class="close-btn"><i class="iconicon-test iconfont"></i></span>
		<!-- 2.0 Logo 图标 -->
		<h2 class="logo"><i class="iconnew iconfont"></i></h2>

		<!-- 3.0 输入框 -->
		<MyInput
			v-model="user.username"
			placeholder="用户名 / 手机号码"
			msg="非法账号"
			:rules="rules.username"
		></MyInput>
		<MyInput
			v-model="user.nickname"
			placeholder="昵称"
			msg="非法名昵"
			:rules="rules.nickname"
		></MyInput>
		<MyInput
			v-model="user.password"
			placeholder="密码"
			type="password"
			msg="非法密码"
			:rules="rules.password"
		></MyInput>

		<!-- 4.0 一个注册提示 -->
		<router-link class="tips" to="/login">已有账号？去登录</router-link>

		<!-- 5.0 登录按钮 -->
		<MyButton type="primary" @click="registerFn">注册</MyButton>
	</div>
</template>

<script>
// 自定义组件使用步骤：  新建/导入/注册/使用
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { userRegisterAPI } from '@/api/user';
export default {
	components: {
		MyButton,
		MyInput
	},
	data() {
		return {
			user: {
				username: '',
				password: '',
				nickname: ''
			},
			rules: {
				username: /^1\d{10}$/,
				password: /^[\w~!@#$%^&*()+=]{3,18}$/,
				nickname: /^.{2,10}$/
			}
		};
	},
	methods: {
		async registerFn() {
			if (
				!this.rules.username.test(this.user.username) ||
				!this.rules.password.test(this.user.password) ||
				!this.rules.nickname.test(this.user.nickname)
			)
				return this.$toast.fail('信息不合法');

			this.$toast.loading('注册中');

			const res = (await userRegisterAPI(this.user)).data;
			console.log(res);
			if (res.statusCode === 400) return this.$toast.fail(res.message);
			this.$toast.success(res.message);
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
