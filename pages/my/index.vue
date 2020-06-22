<template>
	<view class="wrap">
		<!-- 用户 -->
		<view class="u_wrap">
			 <view class="user">
				 <view class="img">
					 <image src="http://www.2500fang.com/upload/esf/mem/face/20190301/1551409852639212=.jpg"></image>
				 </view>
				 <view class="name" v-if="user">jack</view>
				 <view class="login" @tap="to" v-else>点击注册登录</view>
			 </view>
		</view>
		
		<!-- 列表 -->
		<view class="List">
			<view class="itme">
				<view class="left">
				<uni-icons type="chatbubble" size="20" color="#1de692"></uni-icons>
				<text>我的预约</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
			
			<view class="itme">
				<view class="left">
				<uni-icons type="email" size="20" color="#1de692"></uni-icons>
				<text>网上认筹订单</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
			
			<view class="itme">
				<view class="left">
				<uni-icons type="email" size="20" color="#1de692"></uni-icons>
				<text>我的订单</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
			
			<view class="itme">
				<view class="left">
				<uni-icons type="email" size="20" color="#1de692"></uni-icons>
				<text>认购协议</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
			
			<view class="itme">
				<view class="left">
				<uni-icons type="redo" size="20" color="#1de692"></uni-icons>
				<text>我的分享</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
		</view>
		
		<!-- 列表 -->
		<view class="List">
			<view class="itme">
				<view class="left">
				<uni-icons type="person" size="20" color="#1de692"></uni-icons>
				<text>我的预约</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
			
			<view class="itme">
				<view class="left">
				<uni-icons type="heart" size="20" color="#1de692"></uni-icons>
				<text>网上认筹订单</text>
				</view>
				<view class="right">
					<uni-icons type="arrowright" size="20" color="#ccc"></uni-icons>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default{
		data(){
			return{
				user:false
			}
		},
		components:{
			uniIcons
		},
		onLoad(){
			
		},
		methods:{
			to(){
				uni.navigateTo({
					url:'../login/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
	/* 用户容器 */
	.u_wrap{
		width: 100%;
		padding: 0 40rpx;
		box-sizing: border-box;
		background-color: #fff;
		.user{
			display: flex;
			align-items: center;
			width: 100%;
			padding: 40rpx 0;
			.img{
				width: 100rpx;
				height: 100rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.name,.login{
				padding-left: 40rpx;
				font-weight: 700;
			}
		}
	}
	
	
	
	// 列表
	.List{
		margin-top: 20rpx;
		padding: 0 20rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		.itme{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #ccc;
			&:last-child{
				border: none;
			}
			.left{
				display: flex;
				align-items: center;
				font-size: 32rpx;
				text{
					padding-left: 20rpx;
				}
			}
		}
	}
</style>
