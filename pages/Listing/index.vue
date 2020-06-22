<template>
	<view>
		<!-- 导航栏 -->
		<view class="nav">
			<view :class="['itme',idx==1?  'active' : '']" @tap="idx=1">高层</view>
			<view :class="['itme',idx==2?  'active' :'']" @tap="idx=2">洋房</view>
			<view :class="['itme',idx==3?  'active' :'']" @tap="idx=3">低密度产品</view>
			<view :class="['itme',idx==4?  'active' : '']" @tap="idx=4">公寓|商铺|写字楼</view>
		</view>


		<!-- 房源列表 -->
		<view class="list">
			<view class="item" v-for="item in 10" :key="itme">
				<view class="title">
					房号 : 1号楼-1-2801
				</view>
				<view class="contant">
					<view class="info">
						<view class="area">建面约: 143㎡</view>
						<view class="unit">户型: 四房两厅两卫</view>
						<view class="details" @tap="showImg">查看户型详情</view>
					</view>
					<view class="Deco">
						<view class="deco">装修：豪装</view>
						<view class="price">单价：11659元/㎡</view>
						<view class="num">总价价：166万</view>
					</view>
					<view class="btn">
						<view class="buy">立即认购</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: false,
				idx: 1,
				arr:['https://ke-image.ljcdn.com/newhouse-user-image/9ef26e5935785276a3202eca69a68555.jpg.315x240.jpg']
			}
		},

		onLoad() {

		},
		methods: {
			showImg(item) {
				const _this = this;
				uni.previewImage({
					current: _this.arr[0], // 当前显示图片的http链接
					urls: _this.arr, // 需要预览的图片http链接列表
					
				})
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
	// 导航栏
	.nav {
		width: 100%;
		box-sizing: border-box;
		padding: 40rpx 50rpx;
		display: flex;
		justify-content: space-between;

		.itme {
			font-size: 32rpx;
			border: 1px solid #1de692;
			color: #1de692;
			padding: 5rpx 10rpx;
			font-weight: 700;
		}

		.active {
			border: none;
			background-color: #1de692;
			color: #fff;
		}
	}

	// 房源列表
	.list {
		margin-top: 20rpx;
		box-sizing: border-box;
		padding: 0 20rpx;

		.item {
			margin: 20rpx 0;
			padding: 30rpx 0;
			border-radius: 10rpx;
			background-image: linear-gradient(-90deg, #4CD964 0%, #fff 100%);

			.title {
				padding-left: 20rpx;
				font-size: 36rpx;
				color: #8099af;
			}

			.contant {
				display: flex;
				align-items: center;
				justify-content: space-around;

				.info {
					display: flex;
					flex-direction: column;
					font-size: 28rpx;

					.unit {
						padding: 10rpx 0;
					}

					.details {
						background-color: #4CD964;
						color: #fff;
						text-align: center;
						padding: 5rpx 0;
						border-radius: 20rpx;
					}
				}

				.Deco {
					display: flex;
					flex-direction: column;
					font-size: 28rpx;

					.price {
						padding: 10rpx 0;
					}
				}

				.btn {
					display: flex;
					align-items: center;
					width: 15%;

					.buy {
						padding: 10rpx;
						text-align: center;
						background-color: #4CD964;
						color: #fff;
					}
				}
			}

		}

	}
</style>
