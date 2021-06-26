<template>
	<!-- 3. 通过 :class 绑定类名 -->
	<div
		class="btn"
		@click="btn"
		:class="{
			primary: type === 'primary',
			danger: type === 'danger'
		}"
	>
		<!-- 通过插槽，用户可以修改组件的内容 -->
		<slot>按钮</slot>
	</div>
</template>

<script>
export default {
	// 1. 通过 props 接收父组件传过来的值
	props: {
		type: String,
		default: 'primary'
	},
	methods: {
		btn(e) {
			// console.log("你点击了子组件");
			// 触发父组件上的自定义事件
			this.$emit('click', e);
		}
	}
};
</script>

<style lang="less" scoped>
.btn {
	width: 318px;
	height: 48px;
	border-radius: 24px;
	background-color: #ccc;
	color: #666;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin: 20px auto;
}
// 2. 自定义一些样式用来切换按钮风格
.primary {
	background-color: #07c160;
	color: #fff;
}
.danger {
	background-color: #ee0a24;
	color: #fff;
}
</style>
