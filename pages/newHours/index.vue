<template>
	<view class="wrap">
		<!-- 搜索框 -->
		<view class="n_wrap">
			<view class="search">
				<uniIcons type="search" class="icon" name="search" color="#999"/>
				<view class="ipt">请输入区域查找</view>
			</view>
		</view>

		<!-- 筛选栏 -->
		<view class="l_wrap">
			<view class="F_wrap">
				<view class="menu">
					<view class="item" @tap.stop="qh(1)">
						<text>城市</text>
						<view :class="['tria',dire&&idx==1? 'active' : ''] "></view>
					</view>
					<view class="item" @tap.stop="qh(2)">
						<text>产品</text>
						<view :class="['tria',dire&&idx==2? 'active' : ''] "></view>
					</view>
				</view>


				<!-- 城市筛选 -->
				<view catchtouchmove='doNothing' class="city" v-show="dire&&idx==1">
					<view class="list">
						<view class="item">
							南通
						</view>

						<view class="item">
							苏州
						</view>

						<view class="item">
							上海
						</view>
						<view class="item">
							南通
						</view>

						<view class="item">
							苏州
						</view>

						<view class="item">
							上海
						</view>

						<view class="item">
							南通
						</view>

						<view class="item">
							苏州
						</view>

						<view class="item">
							上海
						</view>
					</view>

					<view class="btn">
						<view class="cancel" @tap="dire=false">清空选项</view>
						<view class="enter">确定</view>
					</view>
				</view>

				<!-- 产品 -->
				<view catchtouchmove='doNothing' class="prod" v-show="dire&&idx==2">
					<view class="list">
						<view class="item">
							写字楼
						</view>

						<view class="item">
							商铺
						</view>

						<view class="item">
							公寓
						</view>
						<view class="item">
							别墅
						</view>

						<view class="item">
							洋房
						</view>

						<view class="item">
							高层
						</view>

					</view>

					<view class="btn">
						<view class="cancel" @tap="dire=false">清空选项</view>
						<view class="enter">确定</view>
					</view>
				</view>
			</view>



			<!-- 房屋列表 -->
			<view class="L_wrap">
				<navigator url="../details/index">
					<view class="item">
						<view class="left">
							<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
							 mode="widthFix"></image>
						</view>
					
						<view class="right">
							<view class="title">
								江南沄著花园
							</view>
							<view class="info">
								吴中区 | 吴中太湖新城 | 三房两厅两卫
							</view>
							<view class="tags">
								<view class="tag">综合体</view>
								<view class="tag">在售</view>
								<view class="tag">最新开盘</view>
								<view class="tag">装修房</view>
							</view>
							<view class="price">
								31000元/㎡起
							</view>
						</view>
					</view>
			     </navigator>
				
				
				

				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>


				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>

				<view class="item">
					<view class="left">
						<image src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMTQyOTRcLzIwMTgxMTI4MjExMDMxNzQyLmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9yZXNpemUsd18yNjAsaF8xODAsbV9maWxsXC9mb3JtYXQsd2VicCJ9_x1.25"
						 mode="widthFix"></image>
					</view>

					<view class="right">
						<view class="title">
							江南沄著花园
						</view>
						<view class="info">
							吴中区 | 吴中太湖新城 | 三房两厅两卫
						</view>
						<view class="tags">
							<view class="tag">综合体</view>
							<view class="tag">在售</view>
							<view class="tag">最新开盘</view>
							<view class="tag">装修房</view>
						</view>
						<view class="price">
							31000元/㎡起
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 字体图标
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	export default {
		data() {
			return {
				dire: false,
				idx: 0
			}
		},
		components: {
			uniIcons,
		},
		onLoad(option) {

		},
		methods: {
			// 切换筛选栏
			qh(idx) {
				this.idx = idx;
				this.dire = !this.dire
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #eee;
	}
	// 顶部搜索栏
	.n_wrap {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;

		.search {
			margin-top: 20rpx;
			padding: 20rpx 0;
			display: flex;
			align-items: center;
			width: 100%;
			border-radius: 50rpx;
			background-color: #fff;

			.icon {
				padding-left: 20rpx;
			}

			.ipt {
				flex: 1;
				padding-left: 10rpx;
				font-size: 34rpx;
				color: #999;
			}
		}
	}

	// 列表容器
	.l_wrap {
		margin-top: 20rpx;
		width: 100%;
		background-color: #fff;

		.F_wrap {
			position: sticky;
			top: 0;
			z-index: 999;

			.menu {
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 100%;
				height: 100rpx;
				box-shadow: 0 0.533vw 1.333vw rgba(0, 0, 0, .05);
				background-color: #fff;

				.item {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 50%;

					.tria {
						margin-left: 10rpx;
						margin-top: 32rpx;
						width: 0;
						height: 0;
						border: 20rpx solid transparent;
						border-top-color: #ccc;
					}

					.active {
						margin-top: -32rpx;
						width: 0;
						height: 0;
						border: 20rpx solid transparent;
						border-bottom-color: #ccc;
					}

				}

			}

			// 筛选
			.city,
			.prod {
				position: absolute;
				left: 0;
				bottom: 100;
				width: 100%;
				height: 3000rpx;
				background-color: rgba(0, 0, 0, 0.6);

				.list {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					background-color: #fff;

					.item {
						width: 30%;
						height: 100rpx;
						margin-top: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 1px solid #eee;
						color: #333;
						font-size: 40rpx;
					}
				}

				.btn {
					padding-top: 20rpx;
					display: flex;
					justify-content: space-between;
					width: 100%;
					background-color: #fff;

					.cancel {
						display: flex;
						width: 48%;
						height: 100rpx;
						background-color: #F8F8F8;
						color: #777777;
						justify-content: center;
						align-items: center;
					}

					.enter {
						display: flex;
						width: 48%;
						height: 100rpx;
						justify-content: center;
						align-items: center;
						background-color: #1de692;
						color: #b8e2d1;
					}
				}
			}


		}


		// 房屋列表
		.L_wrap {
			.item {
				padding: 40rpx 20rpx;

				display: flex;
				justify-content: space-between;

				.left {
					width: 35%;

					image {
						width: 100%;
					}
				}

				.right {
					width: 63%;
					display: flex;
					flex-direction: column;

					.title {
						font-size: 32rpx;
						font-weight: 800;
						padding-bottom: 20rpx;
					}

					.info {
						font-size: 24rpx;
						color: #666;
						padding-bottom: 20rpx;
					}

					.tags {
						display: flex;
						flex-wrap: nowrap;

						.tag {
							padding: 5rpx 10rpx;
							font-size: 24rpx;
							background-color: #b8e2d1;
							color: #1de692;
							overflow: hidden;
							text-overflow: ellipsis;

							&:nth-child(n+2) {
								margin-left: 10rpx;
							}
						}
					}

					.price {
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
</style>
