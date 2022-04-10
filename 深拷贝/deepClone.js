/**
 * 
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 * @returns 
 */

// 需要拷贝的对象，和去重循环map
// 深拷贝
function deepClone (obj, map = new Map()) {
  // 判断是不是对象/数组
  if (typeof obj !== 'object') {
    return obj;
  }

  // 判断是否key循环
  if (map.get(obj)) {
    return map.get(obj);
  }

  // 初始化默认为对象
  let result = {};

  // 判断是否是数组类型，如是，改变初始化对象
  if (obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]') {
    result = [];
  }

  // 设置map，防循环key
  map.set(obj, result);

  // 递归遍历
  for(let key in obj) {
    // 避免是内部原型链上系统默认属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], map);
    }
  }

  return result;
}