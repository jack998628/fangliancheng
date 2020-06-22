// 封装异步请求方法
let jkRequest = function(option){
	return new Promise((resolve,reject)=>{
		 uni.request({
		 	url:option.url,
			method:option.method || 'GET',
		 })
		.then((res)=>{
			resolve(res)
		})
		.catch((err)=>{
			reject(reject)
		})
	})
}

export {
	jkRequest
}