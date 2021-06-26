<template>
	<!-- 如果父组件上的属性，是直接应用到子组件的跟标签上，是可以不用props就直接使用的,例如placeholder和type -->
	<!-- 💥💥记得是外面不能套div -->
	<input
		class="ipt"
		v-model.trim="value"
		@input="InputFn"
		@blur="blurFn"
		:class="{
			success: state === 'success',
			error: state === 'error'
		}"
	/>
</template>

<script>
export default {
	// 自定义组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
	//   model: {
	//     prop: "value",
	//     event: "input",
	//   },
	data() {
		return {
			state: '',
			value: ''
		};
	},
	props: {
		rules: RegExp,
		msg: {
			type: String,
			default: '输入的数据不合法'
		}
	},
	methods: {
		//   输入框改变触发input事件
		InputFn() {
			// e.target触发事件的真实DOM节点
			//   console.log(e.target);
			//   v-modal 自定义组件双向绑定的时候需要把值进行回传
			this.$emit('input', this.value);
		},
		blurFn() {
			if (!this.rules) return;
			//   正则表达式.test(字符串)   可以用来校验数据
			if (this.rules.test(this.value)) {
				console.log('正则校验通过');
				this.state = 'success';
			} else {
				console.log('正则校验不通过', this.msg);
				this.state = 'error';
				this.$notify({ type: 'warning', message: this.msg });
			}
		}
	}
};
</script>

<style lang="less" scoped>
.ipt {
	display: block;
	width: 318px;
	height: 50px;
	line-height: 50px;
	border: none;
	outline: none;
	border-bottom: 2px solid #ccc;
	font-size: 20px;
	margin: 20px auto;
	background-color: transparent;
}
.success {
	border-bottom-color: green;
}
.error {
	border-bottom-color: red;
	color: red;
}
</style>
