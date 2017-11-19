import axios from 'axios'
export function geetest (window) {
  if (typeof window === 'undefined') {
    throw new Error('Geetest requires browser environment')
  }
  let document = window.document
  let Math = window.Math
  let head = document.getElementsByTagName('head')[0]

  function _Object (obj) {
    this._obj = obj
  }

  _Object.prototype = {
    _each: function (process) {
      let _obj = this._obj
      for (let k in _obj) {
        if (_obj.hasOwnProperty(k)) {
          process(k, _obj[k])
        }
      }
      return this
    }
  }

  function Config (config) {
    let self = this
    new _Object(config)._each(function (key, value) {
      self[key] = value
    })
  }

  Config.prototype = {
    api_server: 'api.geetest.com',
    protocol: 'http://',
    typePath: '/gettype.php',
    fallback_config: {
      slide: {
        static_servers: ['static.geetest.com', 'dn-staticdown.qbox.me'],
        type: 'slide',
        slide: '/static/js/geetest.0.0.0.js'
      },
      fullpage: {
        static_servers: ['static.geetest.com', 'dn-staticdown.qbox.me'],
        type: 'fullpage',
        fullpage: '/static/js/fullpage.0.0.0.js'
      }
    },
    _get_fallback_config: function () {
      let self = this
      if (isString(self.type)) {
        return self.fallback_config[self.type]
      } else if (self.new_captcha) {
        return self.fallback_config.fullpage
      } else {
        return self.fallback_config.slide
      }
    },
    _extend: function (obj) {
      let self = this
      new _Object(obj)._each(function (key, value) {
        self[key] = value
      })
    }
  }
  let isNumber = function (value) {
    return (typeof value === 'number')
  }
  let isString = function (value) {
    return (typeof value === 'string')
  }
  let isBoolean = function (value) {
    return (typeof value === 'boolean')
  }
  let isObject = function (value) {
    return (typeof value === 'object' && value !== null)
  }
  let isFunction = function (value) {
    return (typeof value === 'function')
  }

  let callbacks = {}
  let status = {}

  let random = function () {
    return parseInt(Math.random() * 10000) + (new Date()).valueOf()
  }

  let loadScript = function (url, cb) {
    let script = document.createElement('script')
    script.charset = 'UTF-8'
    script.async = true
    script.onerror = function () {
      cb(true)
    }
    let loaded = false
    script.onload = script.onreadystatechange = function () {
      if (!loaded &&
        (!script.readyState ||
        script.readyState === 'loaded' ||
        script.readyState === 'complete')) {
        loaded = true
        setTimeout(function () {
          cb(false)
        }, 0)
      }
    }
    script.src = url
    head.appendChild(script)
  }

  let normalizeDomain = function (domain) {
    // special domain: uems.sysu.edu.cn/jwxt/geetest/
    // return domain.replace(/^https?:\/\/|\/.*$/g, ''); uems.sysu.edu.cn
    return domain.replace(/^https?:\/\/|\/$/g, '')// uems.sysu.edu.cn/jwxt/geetest
  }
  let normalizePath = function (path) {
    path = path.replace(/\/+/g, '/')
    if (path.indexOf('/') !== 0) {
      path = '/' + path
    }
    return path
  }
  let normalizeQuery = function (query) {
    if (!query) {
      return ''
    }
    let q = '?'
    new _Object(query)._each(function (key, value) {
      if (isString(value) || isNumber(value) || isBoolean(value)) {
        q = q + encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
      }
    })
    if (q === '?') {
      q = ''
    }
    return q.replace(/&$/, '')
  }
  let makeURL = function (protocol, domain, path, query) {
    domain = normalizeDomain(domain)
    let url = normalizePath(path) + normalizeQuery(query)
    if (domain) {
      url = protocol + domain + url
    }

    return url
  }
  let load = function (protocol, domains, path, query, cb) {
    let tryRequest = function (at) {
      let url = makeURL(protocol, domains[at], path, query)
      loadScript(url, function (err) {
        if (err) {
          if (at >= domains.length - 1) {
            cb(true)
          } else {
            tryRequest(at + 1)
          }
        } else {
          cb(false)
        }
      })
    }
    tryRequest(0)
  }

  let jsonp = function (domains, path, config, callback) {
    if (isObject(config.getLib)) {
      config._extend(config.getLib)
      callback(config)
      return
    }
    if (config.offline) {
      callback(config._get_fallback_config())
      return
    }

    let cb = 'geetest_' + random()
    window[cb] = function (data) {
      if (data.status === 'success') {
        callback(data.data)
      } else if (!data.status) {
        callback(data)
      } else {
        callback(config._get_fallback_config())
      }
      window[cb] = undefined
      try {
        delete window[cb]
      } catch (e) {
      }
    }
    load(config.protocol, domains, path, {
      gt: config.gt,
      callback: cb
    }, function (err) {
      if (err) {
        callback(config._get_fallback_config())
      }
    })
  }

  let throwError = function (errorType, config) {
    let errors = {
      networkError: '网络错误',
      gtTypeError: 'gt字段不是字符串类型'
    }
    if (typeof config.onError === 'function') {
      config.onError(errors[errorType])
    } else {
      throw new Error(errors[errorType])
    }
  }

  let detect = function () {
    return window.Geetest || document.getElementById('gt_lib')
  }

  if (detect()) {
    status.slide = 'loaded'
  }

  window.initGeetest = function (userConfig, callback) {
    let config = new Config(userConfig)
    if (userConfig.https) {
      config.protocol = 'https://'
    } else if (!userConfig.protocol) {
      config.protocol = window.location.protocol + '//'
    }

    // for KFC
    if (userConfig.gt === '050cffef4ae57b5d5e529fea9540b0d1' ||
      userConfig.gt === '3bd38408ae4af923ed36e13819b14d42') {
      config.apiserver = 'yumchina.geetest.com/' // for old js
      config.api_server = 'yumchina.geetest.com'
    }

    if (isObject(userConfig.getType)) {
      config._extend(userConfig.getType)
    }
    jsonp([config.api_server || config.apiserver], config.typePath, config, function (newConfig) {
      let type = newConfig.typ
      let init = function () {
        config._extend(newConfig)
        callback(new window.Geetest(config))
      }
      callbacks[type] = callbacks[type] || []
      let s = status[type] || 'init'
      if (s === 'init') {
        status[type] = 'loading'

        callbacks[type].push(init)
        load(config.protocol, newConfig.static_servers || newConfig.domains, newConfig[type] || newConfig.path, null, function (err) {
          if (err) {
            status[type] = 'fail'
            throwError('networkError', config)
          } else {
            status[type] = 'loaded'
            let cbs = callbacks[type]
            for (let i = 0, len = cbs.length; i < len; i = i + 1) {
              let cb = cbs[i]
              if (isFunction(cb)) {
                cb()
              }
            }
            callbacks[type] = []
          }
        })
      } else if (s === 'loaded') {
        init()
      } else if (s === 'fail') {
        throwError('networkError', config)
      } else if (s === 'loading') {
        callbacks[type].push(init)
      }
    })
  }
}

let getCode = {
  captchaObj: false,
  load: function (captchaObj) {
    // 将验证码加到id为captcha的元素里
    captchaObj.appendTo('#captcha')
    getCode.captchaObj = captchaObj
  },
  init: function () {
    let instance = axios.create({
      baseURL: '/api',
      timeout: 1000
    })
    instance.get('/user/vcodeFirstCheck').then(res => {
      console.log(res)
      window.initGeetest({
        gt: res.data.gt,
        challenge: res.data.challenge,
        product: 'float',
        offline: !res.data.success
      }, getCode.load)
    }, err => console.log(err))
    /*
     $.ajax({
     // 获取id，challenge，success（是否启用failback）
     url: "/user/vcodeFirstCheck",
     type: "get",
     dataType: "json",
     success: function (data) {
     //alert(data.challenge);
     // 使用initGeetest接口
     // 参数1：配置参数
     // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
     initGeetest({
     gt: data.gt,
     challenge: data.challenge,
     product: "float", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
     offline: !data.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
     }, getCode.load);
     }
     }); */
  }
}
export {getCode}
