Function.prototype.call = (context) => {

  /// [object Object]

  if (typeof context === 'function') {
    throw new Error("Type error");
  }

  // 获取传入的参数
  let args = [...arguments].slice(1);

  // 给context对象绑定关联当前函数
  context.fn = this || window;

  let result = context.fn(...args);

  // 执行完毕后删除context.fn
  delete context.fn;

  // 将结果返回
  return result;

  // 其实就是给传入进来的context绑定一个成员变量，赋值当前函数给到这个成员变量然后在去调用它
}


Function.prototype.call = (context) => {
  // 判断context类型
  if (typeof context === 'function') {
    throw new Error('type error');
  }

  // 获取传入的args
  let args = [...arguments].slice(1);
  let result = null;

  // 将context绑定当前函数对象
  let symbol = Symbol();
  context[symbol] = this || window;

  // 执行函数
  result = context[symbol](...args);

  // 去除成员变量
  delete context[symbol];

  return result;
}

Function.prototype.apply = (context) => {
  // 判断context类型
  if (typeof context === 'function') {
    throw new Error('type error');
  }

  // 获取传入的args
  let args = arguments[1];
  let result = null;

  // 将context绑定当前函数对象
  let symbol = Symbol();
  context[symbol] = this || window;

  // 执行函数
  if (args.length > 0) {
    result = context[symbol](...args);
  } else {
    result = context[symbol]();
  }

  // 去除成员变量
  delete context[symbol];

  return result;
}

Function.prototype.bind = (context) => {
  // 判断context类型
  if (typeof context === 'function') {
    throw new Error('type error');
  }

  // 获取传入的args
  let args = arguments[1];
  let fn = this;

  // 返回函数
  return () => {
    return fn.apply(context, arguments.concat(...args));
  }
}