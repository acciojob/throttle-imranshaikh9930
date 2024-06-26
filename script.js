function throttle(callback, delay) {
  let timeOut = null;
  let lastArgs = null;
  let context = null;

  function throttledFunction(...args) {
    if (!timeOut) {
      callback.apply(this, args);
      timeOut = setTimeout(() => {
        timeOut = null;
        if (lastArgs) {
          callback.apply(context, lastArgs);
          lastArgs = null;
          context = null;
        }
      }, delay);
    } else {
      lastArgs = args;
      context = this;
    }
  }

  throttledFunction.cancel = function() {
    if (timeOut) {
      clearTimeout(timeOut);
      timeOut = null;
    }
    lastArgs = null;
    context = null;
  };

  return throttledFunction;
}

module.exports = throttle;
