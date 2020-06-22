<template>
	<view class="wrap">
		<!-- Logo -->
		<view class="logo">
			<image src="https://pages.anjukestatic.com/usersite/touch/img/user/login/icon_logo@3x.png" mode="widthFix"></image>
		</view>


		<!-- 输入框 -->
		<view class="input">
			<!-- 手机号 -->
			<view class="phone">
				<uni-icons class="phone_icon" type="phone" size="20" color="#ccc"></uni-icons>
				<input @input="Ipt" v-model="phone" class="phone_ipt" type="number" placeholder="请输入手机号码" />
				<view :class="['phone_code',active? 'active' : '']">获取验证码</view>
			</view>
			<!-- 密码 -->
			<view class="code">
				<uni-icons class="code_icon" type="locked" size="20" color="#ccc"></uni-icons>
				<input @input="Ipt" v-model="code" class="code_ipt" type="text" placeholder="请输入手机动态码" />
			</view>
			<!-- 密码 -->
			<view class="password">
				<uni-icons class="password_icon" type="locked" size="20" color="#ccc"></uni-icons>
				<input @input="Ipt" v-model="password" class="password_ipt" type="text" placeholder="输入新密码" />
			</view>
			<!-- 确认密码 -->
			<view class="confirm">
				<uni-icons class="confirm_icon" type="locked" size="20" color="#ccc"></uni-icons>
				<input @input="Ipt" v-model="confirm" class="confirm_ipt" type="text" placeholder="确认密码" />
			</view>
		</view>


		<!-- 提示信息 -->
		<view class="info">
			房链城账号已全面升级成为房链城统一认证体系，如忘记原密码，可通过手机验证码登陆
		</view>


		<!-- 登录按钮 -->
		<view class="login_btn">
			<button @tap="login" :class="['login',disabled? 'dsb' : '']" :disabled="disabled">修改密码</button>
		</view>

	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				active: false,
				disabled: true,
				phone: '',
				code: '',
				password: '',
				confirm: ''
			}
		},
		components: {
			uniIcons
		},
		onLoad() {

		},
		methods: {
			Ipt() {
				this.phone.length == 11 ? this.active = true : this.active = false;
				if (this.phone.length == 11 && this.code.length >= 6 && this.password.length >= 6 && this.confirm == this.password) {
					this.disabled = false;
				} else {
					this.disabled = true;
				}
			},
			// 登录
			login() {
				if (this.disabled == false) {
					console.log("登录成功")
				} else {
					return
				}
			}
		}
	}
</script>
<style>
	page {
		background-color: #fff !important
	}
</style>
<style scoped lang="scss">
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			padding: 80rpx 0;
			width: 230rpx;
		}
	}

	.input {
		padding: 0 40rpx;
		box-sizing: border-box;
		width: 100%;

		// 手机号码输入
		.phone {
			padding: 30rpx 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #F8F9FB;
			color: #C0C6CC;
			font-size: 34rpx;

			.phone_ipt {
				width: 60%;
				padding-left: 20rpx;
			}

			.phone_icon {
				padding-left: 20rpx;
			}

			.phone_code {
				flex: 1;
				height: 100%;
				font-size: 30rpx;
				color: #C0C6CC;
			}

			.active {
				color: #1de692;
			}
		}

		// 密码输入
		.code,
		.password,
		.confirm {
			margin-top: 40rpx;
			padding: 30rpx 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #F8F9FB;
			color: #C0C6CC;
			font-size: 34rpx;

			.code_ipt,
			.password_ipt,
			.confirm_ipt {
				flex: 1;
				width: 60%;
				padding-left: 20rpx;
			}

			.code_icon,
			.password_icon,
			.confirm_icon {
				padding-left: 20rpx;
			}
		}
	}


	// 协议信息
	.info {
		margin-top: 10rpx;
		padding: 0 40rpx;
		font-size: 28rpx;
	}

	// 登录
	.login_btn {
		width: 100%;
		padding: 0 40rpx;
		box-sizing: border-box;

		.login {
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 80rpx;
			background-color: #3CB950;
			color: #fff;
		}

		.dsb {
			opacity: .3;
		}
	}
</style>
