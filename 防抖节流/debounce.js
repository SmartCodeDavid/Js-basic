function debounce(fn, timeout) {
  let timer = null;
  let count = 0;
  return () => {
    let args = [...arguments];
    // 首次执行
    if (!count) {
      console.log('首次执行');
      fn.apply(this, args)
      count++;
      return;
    }
    if (timer) {
      console.log('清楚timer');
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, timeout);
  }
}


var executeFn = debounce(() => {
  console.log('execute fn');
},  3000);


window.onclick = () => {
  executeFn('someArguments');
}