function throttle(fn, timeout) {
  let valid = true; // 阀门
  return () => {
    let args = [...arguments];
    if (!valid) {
      return;
    }
    setTimeout(() => {
      fn.apply(this, args);
      valid = true;
    }, timeout);
    valid = false;
  }
}

var executeFn = throttle(() => {
  console.log('execute fn');
}, 300);


window.onclick = () => {
  executeFn('someArguments');
}