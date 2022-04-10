// promise 原理代码
class Promise {
	// 存放then里面的模板回调函数（订阅）
	callbacks = [];
	state = 'pending'; // 增加状态
	value = null; // 保存结果
	constructor(fn) {
		// 执行promise传入的函数，并通过传入通知_resolve函数来传参进行回调
		fn(this._resolve.bind(this));
	}
	// 需要被通知的回调
	then (onFulfilled) {
		if (this.state === 'pending') {
			this.callbacks.push(onFulfilled);
		} else { // resolve 之后，直接执行回调，返回结果了
			onFulfilled(this.value);
		}
		// 用于串式then
		return this;
	}
	// 触发订阅通知
	_resolve(value) {
		this.state = 'fulfilled';
		this.value = value;
		this.callbacks.forEach(fn => fn(value));
	}
}

let p = new Promise(resolve => {
	setTimeout(() => {
		// do something
		resolve('done');
	}, 5000);
}).then((value) => {
	console.log(value);
})

setTimeout(() => {
	p.then(resolve => {
		console.log('after');
		resolve();
	})
})