<template>
	<view class="container">
		<!-- 头部 -->
		<view class="N_wrap">
			<view class="nav">
				<!-- logo -->
				<view class="logo">房链城</view>
				<!-- 搜索框 -->
				<view class="s_wrap">
					<!-- 城市 -->
					<view class="city">
						<view class="title">苏州</view>
						<view class="arrow"></view>
					</view>
					<!-- 搜索框 -->
					<view class="search">找车位就上，车链城</view>
				</view>
			</view>
		</view>
		<!-- 轮播 -->
		<view class="S_wrap">
			<uniSwiperDot :dotsStyles="dotsStyles" :info="info" :current="current" field="content" :mode="mode">
				<swiper @change="change" class="swiper" autoplay interval="3000">
					<swiper-item v-for="item in info" :key="item.url" class="item">
						<image class="img" :src="item.url"></image>
					</swiper-item>

					<!-- 	<swiper-item class="item">
						<image class="img" src="http://www.2500fang.com/upload/webad/20200110/1578621273567278=.jpg"></image>
					</swiper-item>

					<swiper-item class="item">
						<image class="img" src="http://www.2500fang.com/upload/webad/20200110/1578621273567278=.jpg"></image>
					</swiper-item>

					<swiper-item class="item">
						<image class="img" src="http://www.2500fang.com/upload/webad/20200110/1578621273567278=.jpg"></image>
					</swiper-item> -->
				</swiper>
			</uniSwiperDot>

		</view>



		<!-- 菜单列表 -->
		<view class="M_wrap">
			<view class="list">

				<view class="item" @tap="toNewHours">
					<image src="http://app.2500fang.com/ionic/images/home-logo01.png" mode="widthFix"></image>
					<text>新房</text>
				</view>



				<view class="item">
					<image src="http://app.2500fang.com/ionic/images/home-logo02.png" mode="widthFix"></image>
					<text>新房</text>
				</view>


				<view class="item">
					<image src="http://app.2500fang.com/ionic/images/home-logo03.png" mode="widthFix"></image>
					<text>新房</text>
				</view>


				<view class="item" @tap="to">
					<image src="http://app.2500fang.com/ionic/images/home-logo04.png" mode="widthFix"></image>
					<text>在线选房</text>
				</view>


			</view>
		</view>

		<!-- 推荐列表 -->
		<view class="R_wrap">
			<view class="t_wrap">
				<view class="title">为你推荐</view>
			</view>
			<view class="List">
				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>
				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="itme">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="title">九龙仓天曦</view>
						<view class="info">吴江区 | 吴江汾湖 | 二室,三室</view>
						<view class="tags">
							<view class="tag">世界湾区</view>
							<view class="tag">十里蓝海</view>
							<view class="tag">文旅王国</view>
						</view>
						<view class="phone">
							31000元/㎡起
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 轮播指示点
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	// 请求方法
	import {
		jkRequest
	} from "../../api/jkRequest.js";
	// 请求地址
	import  {banner} from '../../api/url.js'
	export default {
		data() {
			return {
				info: [{
						url: 'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9iYW5uZXJcLzIwMjAwNjExMjMyNDU0Mjc4LnBuZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcmVzaXplLHdfNzUwXC9mb3JtYXQsd2VicFwvcXVhbGl0eSxxXzkwIn0%3D'
					}, {
						url: 'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9iYW5uZXJcLzIwMTkwODIyMTY1NzMwNDI0LnBuZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcmVzaXplLHdfNzUwXC9mb3JtYXQsd2VicCJ9'
					}, {
						url: 'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9iYW5uZXJcLzIwMjAwNjExMjMyNDU0Mjc4LnBuZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcmVzaXplLHdfNzUwXC9mb3JtYXQsd2VicFwvcXVhbGl0eSxxXzkwIn0%3D'
					},
					{
						url: 'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9iYW5uZXJcLzIwMTkwODIyMTY1NzMwNDI0LnBuZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcmVzaXplLHdfNzUwXC9mb3JtYXQsd2VicCJ9'
					}
				],
				current: 0,
				mode: 'round',
				dotsStyles: {
					selectedBackgroundColor: "#1de692",
					selectedBorder: "#1de692"
				}
			}
		},
		onLoad() {
			this.getIMG()
		},
		components: {
			uniSwiperDot
		},
		methods: {
			// 跳转
			toNewHours() {
				uni.navigateTo({
					url: '../newHours/index?id=1'
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
			to() {
				uni.navigateTo({
					url: '../Listing/index'
				})
			},
			getIMG() {
				jkRequest({
						url: banner
					})
					.then((res) => {
						console.log(res)
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
	}
</script>

<style>
	page {
		background-color: #eee !important;
	}
</style>
<style lang="scss" scoped>
	// 主容器
	.container {
		width: 100%;

		// 导航栏容器
		.N_wrap {
			width: 100%;
			padding: 0 20rpx;
			box-sizing: border-box;
			background-color: #1de692;

			// 头部导航
			.nav {
				width: 100%;
				display: flex;
				padding: 20rpx 0;
				justify-content: space-between;
				box-sizing: border-box;
				align-items: center;

				.logo {
					font-size: 40rpx;
					color: #fff;
					font-weight: bold;
				}

				.s_wrap {
					display: flex;
					justify-content: space-between;
					background-color: #fff;
					flex: 1;
					margin-left: 20rpx;
					padding: 15rpx 0;
					border-radius: 10rpx;

					.city {
						padding-left: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;

						.title {
							font-size: 30rpx;
							color: #222;
						}

						.arrow {
							margin-left: 5rpx;
							margin-top: 15rpx;
							width: 0;
							height: 0;
							border: 15rpx solid transparent;
							border-top-color: #555;
						}
					}

					.search {
						font-size: 28rpx;
						color: #ccc;
						flex: 1;
						padding-left: 15rpx;
					}
				}
			}
		}


		// 轮播
		.S_wrap {
			width: 100%;

			background-color: #007AFF;

			.swiper {
				width: 100%;
				height: 300rpx;

				.item {
					width: 100%;
					height: 100%;

					.img {
						width: 100%;
						height: 100%;
					}
				}

			}

		}

		// 菜单
		.M_wrap {
			width: 100%;
			padding: 0 20rpx;
			box-sizing: border-box;
			background-color: #fff;

			.list {
				padding: 40rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.item {
					width: 20%;
					display: flex;
					flex-direction: column;
					align-items: center;

					image {
						width: 100rpx;
						height: 100rpx;
					}

					text {
						text-align: center;
						padding-top: 20rpx;
						font-size: 36rpx;
						color: #222;
					}
				}
			}
		}

		// 推荐列表
		.R_wrap {
			width: 100%;
			margin-top: 20rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
			background-color: #fff;

			// 标题
			.t_wrap {
				padding: 20rpx 0;
				display: flex;
				height: 60rpx;
				justify-content: space-between;
				align-items: center;
				width: 100%;

				.title {
					font-size: 40rpx;
					font-weight: 700;
					color: #222;
					box-sizing: border-box;
					border-left: 1rpx solid #1de692;
					border-width: 10rpx;
				}
			}

			// 推荐列表
			.List {
				width: 100%;

				.itme {
					padding: 30rpx 0;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.left {
						width: 45%;

						image {
							width: 100%;
						}
					}

					.right {
						width: 50%;
						height: 100%;

						.tags {
							padding-top: 20rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-size: 26rpx;

							.tag {
								background-color: #b8e2d1;
								color: #1de692;
								padding: 5rpx 5rpx;
								font-weight: 700;
							}
						}

						.info {
							padding-top: 20rpx;
							color: #666;
							font-size: 26rpx;
						}

						.phone {
							display: flex;
							align-items: center;
							padding-top: 20rpx;
							color: #1de692;
							font-size: 30rpx;
						}
					}
				}
			}

		}


	}
</style>
