//Mon Apr 07 2025 15:41:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x552e64 = new _0x4c5639("艾克帮"),
  _0x29df40 = require("./utils");
let _0x4ef0c8 = "akb",
  _0x2d72ba = ["\n", "@", "&"],
  _0x1acf28 = (_0x552e64.isNode() ? process.env[_0x4ef0c8] : _0x552e64.getdata(_0x4ef0c8)) || "",
  _0x1abb56 = [],
  _0x45e959 = 0;
class _0x40711b {
  constructor(_0x21d350) {
    this.index = ++_0x45e959;
    this.valid = false;
    try {
      if (_0x21d350?.["length"] === 2) [this.activedAuthToken, this.requestUA] = _0x21d350;else _0x21d350?.["length"] === 1 && ([this.activedAuthToken] = _0x21d350);
    } catch (_0xeae3d) {
      console.log("参数不完整：自己抓包 请求头里的 token，User-Agent（非必填，可不填，只填一个token）");
    }
  }
  async ["taskApi"](_0x136917, _0x26ca5a, _0xc55bf8, _0xa674a, _0x41a428 = {}) {
    let _0x88f853 = null;
    try {
      {
        let _0x307637 = {
          "url": _0xc55bf8,
          "headers": {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh",
            "Connection": "keep-alive",
            "Host": "api.ikbang.cn",
            "Referer": "https://servicewechat.com/wx342d760f674b013b/42/page-frame.html",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": this.requestUA || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8379",
            "xweb_xhr": "1",
            "Content-Type": "application/json",
            ..._0x41a428
          },
          "timeout": 60000
        };
        if (this.activedAuthToken) {
          _0x307637.headers.token = this.activedAuthToken;
        }
        if (this.requestUA) {
          _0x307637.headers["User-Agent"] = this.requestUA;
        }
        if (_0xa674a) {
          _0x307637.body = _0xa674a;
          _0x307637.headers["Content-Length"] = _0xa674a?.["length"];
        }
        await _0x2881f1(_0x26ca5a, _0x307637).then(async _0x1be9b8 => {
          _0x1be9b8.resp?.["statusCode"] == 200 ? _0x1be9b8.resp?.["body"] ? _0x88f853 = JSON.parse(_0x1be9b8.resp.body) : console.log("账号[" + this.index + "]调用" + _0x26ca5a + "[" + _0x136917 + "]出错，返回为空") : console.log("账号[" + this.index + "]调用" + _0x26ca5a + "[" + _0x136917 + "]出错，返回状态码[" + (_0x1be9b8.resp?.["statusCode"] || "") + "]", "返回结果：", _0x1be9b8.resp?.["body"] || _0x1be9b8?.["err"]);
        });
      }
    } catch (_0x35b3d4) {
      console.log(_0x35b3d4);
    } finally {
      return Promise.resolve(_0x88f853);
    }
  }
  async ["GetUserInfo"]() {
    try {
      let _0x1b2b5b = "GetUserInfo",
        _0x5cde9d = "get",
        _0x26c58c = "https://api.ikbang.cn/v2/iclick-new/usercenter/getUserDetails",
        _0x100057 = "";
      const _0x288c48 = new Date().getTime();
      let _0x44e344 = {
        "timestamp": _0x288c48,
        "sign": _0x29df40?.["MD5_Encrypt"]("" + _0x26c58c + _0x288c48 + "A749380BBD5A4D93B55B4BE245A42988" + this.activedAuthToken)
      };
      await this.taskApi(_0x1b2b5b, _0x5cde9d, _0x26c58c, _0x100057, _0x44e344).then(async _0x3ace5d => {
        _0x3ace5d?.["code"] === 1 ? (this.valid = true, this.isSigned = _0x3ace5d?.["result"]["sign"], console.log("账号[" + this.index + "] 查询个人信息成功，积分：" + _0x3ace5d?.["result"]["totalPoints"] + "，是否签到：" + (this.isSigned ? "已签到" : "未签到"))) : (console.log("账号[" + this.index + "] 查询个人信息失败：" + (_0x3ace5d?.["description"] || JSON.stringify(_0x3ace5d))), this.valid = false);
      });
    } catch (_0x38e954) {
      console.log(_0x38e954);
    }
  }
  async ["Sign"]() {
    try {
      {
        let _0x3347b1 = "Sign",
          _0x4e358d = "post",
          _0x469662 = "https://api.ikbang.cn/v2/iclick-new/signIn/sign",
          _0xda9e1c = "";
        const _0x1c26cc = new Date().getTime();
        let _0x40eb81 = {
          "timestamp": _0x1c26cc,
          "sign": _0x29df40?.["MD5_Encrypt"]("" + _0x469662 + _0x1c26cc + "A749380BBD5A4D93B55B4BE245A42988" + this.activedAuthToken)
        };
        await this.taskApi(_0x3347b1, _0x4e358d, _0x469662, _0xda9e1c, _0x40eb81).then(async _0x64e578 => {
          if (_0x64e578?.["code"] === 1) this.valid = true, this.isSigned = _0x64e578?.["result"]["sign"], console.log("账号[" + this.index + "] 签到成功");else {
            console.log("账号[" + this.index + "] 签到失败：" + (_0x64e578?.["description"] || JSON.stringify(_0x64e578)));
            this.valid = false;
          }
        });
      }
    } catch (_0x195068) {
      console.log(_0x195068);
    }
  }
  async ["doTask"]() {
    try {
      console.log("\n============= 账号[" + this.index + "] 开始执行 签到任务=============");
      await this.Sign();
    } catch (_0x4508c8) {
      console.log(_0x4508c8);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") await _0x3d0397();else {
    if (!(await _0x442f5e())) return;
    console.log("\n================ 开始执行 ================");
    for (let _0x211040 of _0x1abb56) {
      console.log("----------- 执行 第 [" + _0x211040.index + "] 个账号 -----------");
      await _0x211040.GetUserInfo();
    }
    let _0x36b083 = _0x1abb56.filter(_0x36abe2 => _0x36abe2.valid);
    if (_0x1abb56.length > 0) {
      {
        console.log("\n================ 任务队列构建完毕 ================");
        for (let _0x4c2335 of _0x1abb56) {
          console.log("----------- 账号[" + _0x4c2335.index + "] -----------");
          await _0x4c2335.doTask();
        }
      }
    } else console.log("\n====幻生提示：无可用账号，请检查配置============ 任务结束 ================");
    await _0x552e64.showmsg();
  }
})().catch(_0x46a24f => console.log(_0x46a24f)).finally(() => _0x552e64.done());
async function _0x3d0397() {}
async function _0x442f5e() {
  if (_0x1acf28) {
    {
      let _0x3cbd6c = _0x2d72ba[0];
      for (let _0x111f34 of _0x2d72ba) {
        {
          if (_0x1acf28.indexOf(_0x111f34) > -1) {
            {
              _0x3cbd6c = _0x111f34;
              break;
            }
          }
        }
      }
      for (let _0x5974dd of _0x1acf28.split(_0x3cbd6c)) {
        if (_0x5974dd) _0x1abb56.push(new _0x40711b(_0x5974dd?.["split"]("#")));
      }
      userCount = _0x1abb56.length;
    }
  } else {
    console.log("未找到 配置信息，请检查是否配置 变量：", _0x4ef0c8);
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
async function _0x2881f1(_0x314133, _0x2483d0) {
  httpErr = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x44c80b => {
    _0x552e64.send(_0x314133, _0x2483d0, async (_0x3f4751, _0xb03840, _0x456e98) => {
      httpErr = _0x3f4751;
      httpReq = _0xb03840;
      httpResp = _0x456e98;
      _0x44c80b({
        "err": _0x3f4751,
        "req": _0xb03840,
        "resp": _0x456e98
      });
    });
  });
}
function _0x4c5639(_0x58a99b, _0x3f22ff) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x33b9e0, _0x3f8f2a) {
      {
        this.name = _0x33b9e0;
        this.notifyStr = "";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x3f8f2a);
        console.log(this.name + " 开始运行：\n");
      }
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0xacac99) {
      {
        let _0x322085 = this.getval(_0xacac99);
        if (/^@/.test(_0xacac99)) {
          const [, _0x54b950, _0x2c4871] = /^@(.*?)\.(.*?)$/.exec(_0xacac99),
            _0x16196a = _0x54b950 ? this.getval(_0x54b950) : "";
          if (_0x16196a) try {
            const _0xfc32e0 = JSON.parse(_0x16196a);
            _0x322085 = _0xfc32e0 ? this.lodash_get(_0xfc32e0, _0x2c4871, "") : _0x322085;
          } catch (_0x3ceb34) {
            _0x322085 = "";
          }
        }
        return _0x322085;
      }
    }
    ["setdata"](_0x18d619, _0x197604) {
      {
        let _0x47e8a8 = false;
        if (/^@/.test(_0x197604)) {
          {
            const [, _0x146c5a, _0x5843ce] = /^@(.*?)\.(.*?)$/.exec(_0x197604),
              _0x32ca1b = this.getval(_0x146c5a),
              _0x1c2870 = _0x146c5a ? "null" === _0x32ca1b ? null : _0x32ca1b || "{}" : "{}";
            try {
              const _0xd02d22 = JSON.parse(_0x1c2870);
              this.lodash_set(_0xd02d22, _0x5843ce, _0x18d619);
              _0x47e8a8 = this.setval(JSON.stringify(_0xd02d22), _0x146c5a);
            } catch (_0x53d133) {
              const _0x496052 = {};
              this.lodash_set(_0x496052, _0x5843ce, _0x18d619);
              _0x47e8a8 = this.setval(JSON.stringify(_0x496052), _0x146c5a);
            }
          }
        } else _0x47e8a8 = this.setval(_0x18d619, _0x197604);
        return _0x47e8a8;
      }
    }
    ["getval"](_0x3df574) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3df574) : this.isQuanX() ? $prefs.valueForKey(_0x3df574) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3df574]) : this.data && this.data[_0x3df574] || null;
    }
    ["setval"](_0x5d2a34, _0x1adbec) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x5d2a34, _0x1adbec) : this.isQuanX() ? $prefs.setValueForKey(_0x5d2a34, _0x1adbec) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1adbec] = _0x5d2a34, this.writedata(), true) : this.data && this.data[_0x1adbec] || null;
    }
    ["send"](_0x31fbf6, _0x48f7ee, _0x5c423e = () => {}) {
      if (_0x31fbf6 != "get" && _0x31fbf6 != "post" && _0x31fbf6 != "put" && _0x31fbf6 != "delete") {
        {
          console.log("无效的http方法：" + _0x31fbf6);
          return;
        }
      }
      if (_0x31fbf6 == "get" && _0x48f7ee.headers) delete _0x48f7ee.headers["Content-Type"], delete _0x48f7ee.headers["Content-Length"];else {
        if (_0x48f7ee.body && _0x48f7ee.headers) {
          if (!_0x48f7ee.headers["Content-Type"]) _0x48f7ee.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
      if (this.isSurge() || this.isLoon()) {
        {
          if (this.isSurge() && this.isNeedRewrite) {
            _0x48f7ee.headers = _0x48f7ee.headers || {};
            Object.assign(_0x48f7ee.headers, {
              "X-Surge-Skip-Scripting": false
            });
          }
          let _0x23d668 = {
            "method": _0x31fbf6,
            "url": _0x48f7ee.url,
            "headers": _0x48f7ee.headers,
            "timeout": _0x48f7ee.timeout,
            "data": _0x48f7ee.body
          };
          if (_0x31fbf6 == "get") delete _0x23d668.data;
          $axios(_0x23d668).then(_0x39b8d9 => {
            const {
              status: _0x3d7e48,
              request: _0x2a82df,
              headers: _0x28606f,
              data: _0xeba96b
            } = _0x39b8d9;
            _0x5c423e(null, _0x2a82df, {
              "statusCode": _0x3d7e48,
              "headers": _0x28606f,
              "body": _0xeba96b
            });
          }).catch(_0x482ece => console.log(_0x482ece));
        }
      } else {
        if (this.isQuanX()) {
          _0x48f7ee.method = _0x31fbf6.toUpperCase();
          this.isNeedRewrite && (_0x48f7ee.opts = _0x48f7ee.opts || {}, Object.assign(_0x48f7ee.opts, {
            "hints": false
          }));
          $task.fetch(_0x48f7ee).then(_0x514058 => {
            {
              const {
                statusCode: _0x260e6b,
                request: _0x33be94,
                headers: _0x5947d5,
                body: _0x235712
              } = _0x514058;
              _0x5c423e(null, _0x33be94, {
                "statusCode": _0x260e6b,
                "headers": _0x5947d5,
                "body": _0x235712
              });
            }
          }, _0x5b1da2 => _0x5c423e(_0x5b1da2));
        } else {
          if (this.isNode()) {
            {
              this.got = this.got ? this.got : require("got");
              const {
                url: _0x2f4404,
                ..._0x45f0e5
              } = _0x48f7ee;
              this.instance = this.got.extend({
                "followRedirect": false
              });
              this.instance[_0x31fbf6](_0x2f4404, _0x45f0e5).then(_0x4d91ab => {
                const {
                  statusCode: _0x14541b,
                  request: _0x4b2659,
                  headers: _0x10b949,
                  body: _0x38b073
                } = _0x4d91ab;
                _0x5c423e(null, _0x4b2659, {
                  "statusCode": _0x14541b,
                  "headers": _0x10b949,
                  "body": _0x38b073
                });
              }, _0x338738 => {
                {
                  const {
                    message: _0x3b2ed1,
                    request: _0x490c6e,
                    response: _0x138719
                  } = _0x338738;
                  _0x5c423e(_0x3b2ed1, _0x490c6e, _0x138719);
                }
              });
            }
          }
        }
      }
    }
    ["time"](_0x886a6e, _0x3c1a42 = null) {
      {
        let _0x57ab77 = _0x3c1a42 ? new Date(_0x3c1a42) : new Date(),
          _0x3ccb5d = {
            "M+": _0x57ab77.getMonth() + 1,
            "d+": _0x57ab77.getDate(),
            "h+": _0x57ab77.getHours(),
            "m+": _0x57ab77.getMinutes(),
            "s+": _0x57ab77.getSeconds(),
            "q+": Math.floor((_0x57ab77.getMonth() + 3) / 3),
            "S": _0x57ab77.getMilliseconds()
          };
        /(y+)/.test(_0x886a6e) && (_0x886a6e = _0x886a6e.replace(RegExp.$1, (_0x57ab77.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x2c0407 in _0x3ccb5d) new RegExp("(" + _0x2c0407 + ")").test(_0x886a6e) && (_0x886a6e = _0x886a6e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3ccb5d[_0x2c0407] : ("00" + _0x3ccb5d[_0x2c0407]).substr(("" + _0x3ccb5d[_0x2c0407]).length)));
        return _0x886a6e;
      }
    }
    async ["showmsg"]() {
      if (!this.notifyStr) return;
      let _0x5076d0 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x552e64.isNode()) {
        var _0xc8d986 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0xc8d986.sendNotify(this.name, _0x5076d0);
      } else this.msg(_0x5076d0);
    }
    ["logAndNotify"](_0x48dbe1) {
      console.log(_0x48dbe1);
      this.notifyStr += _0x48dbe1;
      this.notifyStr += "\n";
    }
    ["logAndNotifyWithTime"](_0x7301c6) {
      {
        let _0x3290a1 = "[" + this.time("hh:mm:ss.S") + "]" + _0x7301c6;
        console.log(_0x3290a1);
        this.notifyStr += _0x3290a1;
        this.notifyStr += "\n";
      }
    }
    ["logWithTime"](_0x8c86dc) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x8c86dc);
    }
    ["msg"](_0x1b1cbf = t, _0x2d6e48 = "", _0x19cba3 = "", _0x53da9a) {
      {
        const _0x4be2c6 = _0x585f18 => {
          {
            if (!_0x585f18) return _0x585f18;
            if ("string" == typeof _0x585f18) return this.isLoon() ? _0x585f18 : this.isQuanX() ? {
              "open-url": _0x585f18
            } : this.isSurge() ? {
              "url": _0x585f18
            } : undefined;
            if ("object" == typeof _0x585f18) {
              {
                if (this.isLoon()) {
                  let _0x295c8f = _0x585f18.openUrl || _0x585f18.url || _0x585f18["open-url"],
                    _0x4ea808 = _0x585f18.mediaUrl || _0x585f18["media-url"];
                  return {
                    "openUrl": _0x295c8f,
                    "mediaUrl": _0x4ea808
                  };
                }
                if (this.isQuanX()) {
                  {
                    let _0xd79266 = _0x585f18["open-url"] || _0x585f18.url || _0x585f18.openUrl,
                      _0x1fc538 = _0x585f18["media-url"] || _0x585f18.mediaUrl;
                    return {
                      "open-url": _0xd79266,
                      "media-url": _0x1fc538
                    };
                  }
                }
                if (this.isSurge()) {
                  let _0x422fa8 = _0x585f18.url || _0x585f18.openUrl || _0x585f18["open-url"];
                  return {
                    "url": _0x422fa8
                  };
                }
              }
            }
          }
        };
        this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1b1cbf, _0x2d6e48, _0x19cba3, _0x4be2c6(_0x53da9a)) : this.isQuanX() && $notify(_0x1b1cbf, _0x2d6e48, _0x19cba3, _0x4be2c6(_0x53da9a)));
        let _0x4f691c = ["", "============== 系统通知 =============="];
        _0x4f691c.push(_0x1b1cbf);
        _0x2d6e48 && _0x4f691c.push(_0x2d6e48);
        _0x19cba3 && _0x4f691c.push(_0x19cba3);
        console.log(_0x4f691c.join("\n"));
      }
    }
    ["getMin"](_0x5de689, _0x3d3e28) {
      return _0x5de689 < _0x3d3e28 ? _0x5de689 : _0x3d3e28;
    }
    ["getMax"](_0x2bf0b0, _0x5d2475) {
      return _0x2bf0b0 < _0x5d2475 ? _0x5d2475 : _0x2bf0b0;
    }
    ["padStr"](_0x4d5b78, _0x34244f, _0x556330 = "0") {
      let _0x4b3435 = String(_0x4d5b78),
        _0x20c3a6 = _0x34244f > _0x4b3435.length ? _0x34244f - _0x4b3435.length : 0,
        _0x1f7493 = "";
      for (let _0x510c3b = 0; _0x510c3b < _0x20c3a6; _0x510c3b++) {
        _0x1f7493 += _0x556330;
      }
      _0x1f7493 += _0x4b3435;
      return _0x1f7493;
    }
    ["json2str"](_0x18990d, _0x45cff5, _0x1c468d = false) {
      {
        let _0x54b6c7 = [];
        for (let _0x407971 of Object.keys(_0x18990d).sort()) {
          {
            let _0x5cd34d = _0x18990d[_0x407971];
            if (_0x5cd34d && _0x1c468d) _0x5cd34d = encodeURIComponent(_0x5cd34d);
            _0x54b6c7.push(_0x407971 + "=" + _0x5cd34d);
          }
        }
        return _0x54b6c7.join(_0x45cff5);
      }
    }
    ["str2json"](_0x25fc9c, _0x3a027f = false) {
      let _0x3aea16 = {};
      for (let _0x53cfdc of _0x25fc9c.split("&")) {
        {
          if (!_0x53cfdc) continue;
          let _0x2cfce5 = _0x53cfdc.indexOf("=");
          if (_0x2cfce5 == -1) continue;
          let _0x49616c = _0x53cfdc.substr(0, _0x2cfce5),
            _0x276a55 = _0x53cfdc.substr(_0x2cfce5 + 1);
          if (_0x3a027f) _0x276a55 = decodeURIComponent(_0x276a55);
          _0x3aea16[_0x49616c] = _0x276a55;
        }
      }
      return _0x3aea16;
    }
    ["randomString"](_0x19a564, _0x33ec6c = "abcdef0123456789") {
      let _0x2e0749 = "";
      for (let _0x363853 = 0; _0x363853 < _0x19a564; _0x363853++) {
        _0x2e0749 += _0x33ec6c.charAt(Math.floor(Math.random() * _0x33ec6c.length));
      }
      return _0x2e0749;
    }
    ["randomList"](_0x19bf72) {
      {
        let _0x46998f = Math.floor(Math.random() * _0x19bf72.length);
        return _0x19bf72[_0x46998f];
      }
    }
    ["wait"](_0x9fdf4e) {
      return new Promise(_0x1a9c4d => setTimeout(_0x1a9c4d, _0x9fdf4e));
    }
    ["done"](_0x59fc55 = {}) {
      const _0x20fe5b = new Date().getTime(),
        _0x432508 = (_0x20fe5b - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x432508 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(_0x59fc55);
    }
  }(_0x58a99b, _0x3f22ff);
}