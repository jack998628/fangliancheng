<template>
	<view class="wrap">
		<!-- 轮播 -->
		<view class="s_wrap">
			<uniSwiperDot :dotsStyles="dotsStyles" :info="info" :current="current" field="content" :mode="mode">
				<swiper @change="change" class="swiper" autoplay interval="3000">
					<swiper-item v-for="item in info" :key="item.url" class="item">
						<image class="img" :src="item.url"></image>
					</swiper-item>
				</swiper>
			</uniSwiperDot>
		</view>

		<!-- 标题 -->
		<view class="t_wrap">
			<view class="title">龙湖狮山新天地</view>
			<view class="num">
				可售车位
				<text>220</text>
			</view>
		</view>

		<!-- 户型图 -->
		<view class="p_wrap">
			<!-- 标题栏 -->
			<view class="p_top">
				<view class="title">
					<text>楼栋地库图</text>
				</view>
			</view>
			<!-- 预览图 -->
			<view class="prview">
				<scroll-view class="scoll" enable-flex scroll-x>
					<view class="item" v-for="item in imaList" :key="item.title">
						<view class="image">
							<image :src="item.url" @tap="showList(item)" />
						</view>
						<view class="title">{{item.title}}</view>
					</view>
				</scroll-view>
			</view>
		</view>






		<!-- 小区详情 -->
		<view class="d_wrap">
			<!-- 标题栏 -->
			<view class="d_top">
				<view class="title">
					<text>小区详情</text>
				</view>
			</view>
			<!-- 小区详情 -->
			<view class="i_wrap">
				<view class="item">
					<view class="left">
						小区户数:
						<text>400/户</text>
					</view>
					<view class="right">
						车位总量:
						<text>500</text>
					</view>
				</view>
				<view class="item">
					<view class="left">
						车位配比:
						<text>1:1.2</text>
					</view>
					<view class="right">
						建筑年代:
						<text>2017年</text>
					</view>
				</view>
				<view class="item">
					<view class="left">
						物业类型:
						<text>商业/住宅</text>
					</view>
					<view class="right">
						小区房价:
						<text>45000/平</text>
					</view>
				</view>
				<view class="item">
					<view class="text">
						物业公司:
						<text>龙湖物业</text>
					</view>
				</view>
				<view class="item">
					<view class="text">
						开发公司:
						<text>龙湖地产</text>
					</view>
				</view>
				<view class="item">
					<view class="text">
						小区地址:
						<text>高新区狮山路234号</text>
					</view>
				</view>
			</view>
		</view>


		<!-- 置业顾问 -->
		<view class="b_wrap">
			<view class="b_top">
				<view class="title">
					<text>置业顾问</text>
				</view>
			</view>
			<!-- 顾问 -->
			<view class="g_list">
				<view class="item">
					<view class="left">
						<image src="https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/965449a3-5d3b-4561-8188-b438580eb59b.jpg.480x640.jpg" />
						<view class="tag">金牌顾问</view>
					</view>
					<view class="name">JackW</view>
					<view class="right">
						<view class="tag">
							<uni-icons type="phone-filled" size="1.3em" color="#1de692"></uni-icons>
						</view>
						<view class="tag">
							<uni-icons type="chat-filled" size="1.3em" color="#1de692"></uni-icons>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="left">
						<image src="https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/965449a3-5d3b-4561-8188-b438580eb59b.jpg.480x640.jpg" />
						<view class="tag">金牌顾问</view>
					</view>
					<view class="name">JackW</view>
					<view class="right">
						<view class="tag">
							<uni-icons type="phone-filled" size="1.3em" color="#1de692"></uni-icons>
						</view>
						<view class="tag">
							<uni-icons type="chat-filled" size="1.3em" color="#1de692"></uni-icons>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="left">
						<image src="https://img.ljcdn.com/usercenter/images/uc_ehr_avatar/965449a3-5d3b-4561-8188-b438580eb59b.jpg.480x640.jpg" />
						<view class="tag">金牌顾问</view>
					</view>
					<view class="name">JackW</view>
					<view class="right">
						<view class="tag">
							<uni-icons type="phone-filled" size="1.3em" color="#1de692"></uni-icons>
						</view>
						<view class="tag">
							<uni-icons type="chat-filled" size="1.3em" color="#1de692"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 位置及周边配套 -->
		<view class="S_wrap">
			<!-- 标题 -->
			<view class="S_top">
				<view class="title">
					<text>位置及周边配套</text>
				</view>
			</view>
			<!-- 地图 -->
			<view class="Map">
				<map id="map" longitude="120.565402" latitude="31.298302" scale="14" style="width: 100%; height: 100%;"></map>
			</view>
		</view>

		<!-- 底部导航栏 -->
		<view class="tabbar">
			<button open-type="share" class="share" @tap="share">
				<uni-icons type="heart" size="1.3em" color="#666"></uni-icons>
				分享
			</button>
			<view class="info">
				<uni-icons type="heart" size="1.3em" color="#fff"></uni-icons>
				在线咨询
			</view>
			<view class="phone" @tap="phone">
				<uni-icons type="phone" size="1.3em" color="#fff"></uni-icons>
				电话
			</view>
		</view>
	</view>
	</view>
	</view>
</template>

<script>
	// 轮播指示点
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue";
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				info: [{
						url: 'http://www.2500fang.com/upload/newhouse/propertyinfo/propertyimages/20190717/15633405131821563340272133259_800x600.png'
					}, {
						url: 'http://www.2500fang.com/upload/newhouse/propertyinfo/propertyimages/20190318/15528788999951552877024800818_800x600.jpg'
					}, {
						url: 'http://www.2500fang.com/upload/newhouse/propertyinfo/propertyimages/20190318/15528791485381552879116532468_800x600.jpg'
					},
					{
						url: 'http://www.2500fang.com/upload/newhouse/propertyinfo/propertyimages/20190318/15528793274471552879116532617_800x600.jpg'
					}
				],
				current: 0,
				mode: 'round',
				dotsStyles: {
					selectedBackgroundColor: "#1de692",
					selectedBorder: "#1de692"
				},
				imaList: [{
						url: "https://ke-image.ljcdn.com/newhouse-user-image/89e7f9d85048aee0b4ff555936ec00e4.jpg!m_fill,w_585,h_438,l_fbk",
						title: "1#地库图"
					},
					{
						url: "https://ke-image.ljcdn.com/newhouse-user-image/89e7f9d85048aee0b4ff555936ec00e4.jpg!m_fill,w_585,h_438,l_fbk",
						title: "2#地库图"
					},
					{
						url: "https://ke-image.ljcdn.com/newhouse-user-image/89e7f9d85048aee0b4ff555936ec00e4.jpg!m_fill,w_585,h_438,l_fbk",
						title: "3#地库图"
					},
					{
						url: "https://ke-image.ljcdn.com/newhouse-user-image/89e7f9d85048aee0b4ff555936ec00e4.jpg!m_fill,w_585,h_438,l_fbk",
						title: "4#地库图"
					}
				]
			}
		},
		components: {
			uniSwiperDot,
			uniIcons
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			showList(item) {
				const itme = item
				console.log()
				const arr = []
				this.imaList.filter(item => {
					if (item.url) {
						return arr.push(item.url)
					}
				})
				uni.previewImage({
					current: itme.url, // 当前显示图片的http链接
					urls: arr // 需要预览的图片http链接列表
				})
			},
			// 分享
			share() {

			},
			// 电话资讯
			phone() {
				uni.makePhoneCall({
					phoneNumber: '15962831515' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 轮播
	.s_wrap {
		width: 100%;

		.swiper {
			width: 100%;
			height: 500rpx;

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


	// 标题
	.t_wrap {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 20rpx 20rpx;
		box-sizing: border-box;

		.title {
			font-size: 40rpx;
			font-weight: 700;
		}

		.num {
			font-size: 36rpx;
			color: #999;

			text {
				font-size: 32rpx;
				color: #222;
			}
		}
	}

	// 户型图
	.p_wrap {
		margin-top: 15rpx;
		padding: 0 20rpx;
		background-color: #fff;

		//   标题栏
		.p_top {
			padding: 20rpx 0;

			.title {
				font-size: 36rpx;
				border-left: 8rpx solid #1de692;

				text {
					padding-left: 10rpx;

				}
			}
		}

		// 预览图
		.prview {
			width: 100%;
			height: 300rpx;
			padding-bottom: 20rpx;
			background-color: #fff;

			.scoll {
				width: 100%;
				height: 100%;
				white-space: nowrap;

				.item {
					display: inline-block;
					width: 300rpx;
					height: 100%;

					.image {
						width: 100%;
						height: 200rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.title {
						text-align: center;
						font-size: 34rpx;
					}
				}
			}
		}
	}



	// 小区详情
	.d_wrap {
		margin-top: 15rpx;
		padding: 0 20rpx;
		background-color: #fff;

		//标题栏
		.d_top {
			padding: 20rpx 0;

			.title {
				font-size: 36rpx;
				border-left: 8rpx solid #1de692;

				text {
					padding-left: 10rpx;

				}
			}
		}

		//小区信息
		.i_wrap {
			width: 100%;

			.item {
				padding: 10rpx 0;
				display: flex;
				font-size: 34rpx;
				color: #999;

				.left {
					width: 50%;
				}

				.right {
					width: 50%;
				}

				.text {
					width: 100%;
				}
			}
		}

	}



	// 置业顾问
	.b_wrap {
		margin-top: 15rpx;
		padding: 0 20rpx;
		background-color: #fff;

		//标题栏
		.b_top {
			padding: 20rpx 0;

			.title {
				font-size: 36rpx;
				border-left: 8rpx solid #1de692;

				text {
					padding-left: 10rpx;

				}
			}
		}

		// 顾问列表
		.g_list {
			width: 100%;

			.item {
				padding: 30rpx 0;
				display: flex;
				align-items: center;

				.left {
					display: flex;
					flex-direction: column;
					align-items: center;

					image {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
					}

					.tag {
						text-align: center;
						color: sienna;
						background-color: orange;
						font-size: 22rpx;
						padding: 5rpx 20rpx;
						border-radius: 20rpx;
					}
				}

				.name {
					flex: 1;
					padding-left: 20rpx;
					font-size: 34rpx;
					font-weight: none;
				}

				.right {
					display: flex;

					.tag {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100rpx;
						height: 100rpx;
						background-color: #b8e2d1;
						border-radius: 50%;

						&:nth-child(1) {
							margin-right: 20rpx;
						}
					}
				}
			}
		}
	}


	// 位置及周边配套
	.S_wrap {
		margin-top: 15rpx;
		padding: 0 20rpx;
		background-color: #fff;
		padding-bottom: 200rpx;

		//标题栏
		.S_top {
			padding: 20rpx 0;

			.title {
				font-size: 36rpx;
				border-left: 8rpx solid #1de692;

				text {
					padding-left: 10rpx;

				}
			}
		}

		// 地图
		.Map {
			width: 100%;
			height: 400rpx;
		}
	}





	// 底部导航栏
	.tabbar {
		position: fixed;
		display: flex;
		align-items: center;
		width: 100%;
		height: 115rpx;
		bottom: 0;

		.share {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			width: 20%;
			height: 100%;
			color: #666;
			font-size: 38rpx;
			background-color: #fff;
		}

		.info {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40%;
			height: 100%;
			color: #666;
			font-size: 38rpx;
			background-color: #EF473A;
			color: #fff;
		}

		.phone {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40%;
			height: 100%;
			color: #666;
			font-size: 38rpx;
			background-color: #1de692;
			color: #fff;
		}
	}
</style>
