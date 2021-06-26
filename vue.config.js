// 新建 vue.config.js 文件
module.exports = {
	// 自定义配置开发服务器
	devServer: {
		// 端口
		port: 8088,
		// 运行 yarn serve 的时候自动打开浏览器
		open: true
	},
	// 关闭 eslint 语法检查
	// lintOnSave: false
}
