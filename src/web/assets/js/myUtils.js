(function(){
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  _.each = function(arr, fn) {
    for(let i = 0; i < arr.length; i++ ) {
      fn(arr[i], i);
    }
    return arr;
  }

  _.isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  var push = Array.prototype.push;

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        // return chainResult(this, func.apply(_, args));
        return func.apply(_, args);
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  /* 
  1.不管点几次间隔时间内执行一次（每隔一段时间执行一次）
  2.首次立即执行
  3.如果间隔时间内触发了，应该在间隔末尾再执行一次
  */
  _.throttle = function(fn, t) {
    let isFirst = true
    let execTime = +new Date()
    let timer = null
    return function() {
      if(isFirst) {
        fn()
        execTime = +new Date()
        isFirst = false
      } else {
        const curTime = +new Date()
        if (curTime - execTime >= t) {
          fn()
          execTime = +new Date();
        } else {
          timer && clearTimeout(timer)
          const timewait = t - (curTime - execTime)
          timer = setTimeout(() => {
            fn()
            execTime = +new Date();
          }, timewait);
        }
      } 
    }
  }

  root._ = _;
})()