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
				<input @input="Ipt" v-model="phone" class="Phone_ipt" type="number" placeholder="请输入手机号码" />
				<view :class="['code',active? 'active' : '']">获取验证码</view>
			</view>
			<!-- 密码 -->
			<view class="password">
				<uni-icons class="password_icon" type="locked" size="20" color="#ccc"></uni-icons>
				<input @input="Ipt" v-model="password" class="password_ipt" type="text" placeholder="请输入手机动态码" />
			</view>
		</view>


		<!-- 提示信息 -->
		<view class="info">
			房链城账号已全面升级成为房链城统一认证体系，如忘记原密码，可通过手机验证码登陆
		</view>


		<!-- 登录按钮 -->
		<view class="login_btn">
			<button @tap="login" :class="['login',disabled? 'dsb' : '']" :disabled="disabled" value="登录">登录</button>
		</view>



		<!-- 使用账号登录 -->
		<navigator hover-class="none" url="../account/index" class="account">
			使用账号登录
		</navigator>


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
				password: ''
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
				if (this.phone.length == 11 && this.password.length >= 6) {
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

			.Phone_ipt {
				width: 60%;
				padding-left: 20rpx;
			}

			.phone_icon {
				padding-left: 20rpx;
			}

			.code {
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
		.password {
			margin-top: 40rpx;
			padding: 30rpx 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #F8F9FB;
			color: #C0C6CC;
			font-size: 34rpx;

			.password_ipt {
				flex: 1;
				width: 60%;
				padding-left: 20rpx;
			}

			.password_icon {
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

	// 账号登陆
	.account {
		box-sizing: border-box;
		padding: 0 40rpx;
		margin-top: 40rpx;
		width: 100%;
		font-size: 38rpx;
		color: #9AA0A6;
	}
</style>
