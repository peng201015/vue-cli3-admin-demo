export default {
  // 检查是否是密码
  passwordRegx: function (str) {
    var patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,100}$/;
    return patrn.test(str);
  },

  /**
   * 检查是否是邮箱
   */
  isEmail: function (str) {
    var patrn = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    return patrn.test(str);
  },

  /**
   * 检查是否是手机号码
   */
  isPhone: function (str) {
    var patrn = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return patrn.test(str);
  },

  /**
   * 快速生成A-Z
   */
  getENLetter: function () {
    var arr = [];
    for (var i = 65; i < 91; i++) {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  },

  /**
   * 价格小数位少于两位默认保留两位小数 多于两位小数的默认保留原小数位
   */
  conversionFilter: function (value) {
    if (value == "") return "0.00";
    var x = String(value).indexOf(".") + 1;
    if (x == 0)
      value = value + '.00'
    var y = String(value).length - x;
    if (y <= 2 && y >= 1)
      value = value.toFixed(2)
    return value
  },

  /**
   * cookie相关操作
   */
  CookieUtil: {
    // 设置cookie
    set: function (name, value, expires, domain, path, secure) {
      var cookieText = "";
      cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
      if (expires instanceof Date) {
        cookieText += "; expires=" + expires.toGMTString();
      }
      if (path) {
        cookieText += "; path=" + path;
      }
      if (domain) {
        cookieText += "; domain=" + domain;
      }
      if (secure) {
        cookieText += "; secure";
      }
      document.cookie = cookieText;
    },
    // name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
    // 获取cookie
    get: function (name) {
      var cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = "";
      if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
      }
      return cookieValue;
    },
    // 删除cookie
    remove: function (name, domain, path, secure) {
      this.set(name, "", Date(0), domain, path, secure);
    }
  },

  /**
   * 加减乘除相关操作
   */
  math: {
    /**
     * 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     **/
    accAdd: function (arg1, arg2) {
      var r1, r2, m, c;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      c = Math.abs(r1 - r2);
      m = Math.pow(10, Math.max(r1, r2));
      if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
          arg1 = Number(arg1.toString().replace(".", "")) * cm;
          arg2 = Number(arg2.toString().replace(".", ""));
        }
      } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
      }
      return (arg1 + arg2) / m;
    },
    /**
     * 减法函数
     **/
    accSub: function (arg1, arg2) {
      var r1, r2, m, n;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
      n = (r1 >= r2) ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    /**
     * 乘法法函数
     **/
    accMul: function (arg1, arg2) {
      var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) {}
      try {
        m += s2.split(".")[1].length;
      } catch (e) {}
      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },
    /**
     * 除法法函数
     **/
    accDiv: function (arg1, arg2) {
      var t1 = 0,
        t2 = 0,
        r1, r2;
      try {
        t1 = arg1.toString().split(".")[1].length;
      } catch (e) {}
      try {
        t2 = arg2.toString().split(".")[1].length;
      } catch (e) {}
      r1 = Number(arg1.toString().replace(".", ""));
      r2 = Number(arg2.toString().replace(".", ""));
      return (r1 / r2) * Math.pow(10, t2 - t1);
    }
  },

  /*
   * 时间戳转换
   * @param {时间戳} inputTime 
   */
  formatDateTime: function (inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  },
  /**
   * 防抖
   */
  debounce: {
    timeout: null,
    handler: function (fn, wait) {
      if (this.timeout !== null) clearTimeout(this.timeout)
      this.timeout = setTimeout(fn, wait);
    }
  },
  /**
   * 节流
   */
  throttle: function (fn, delay) {
    var prev = Date.now()
    return function () {
      var now = Date.now()
      if (now - prev > delay) {
        fn()
        prev = Date.now()
      }
    }
  }
}
