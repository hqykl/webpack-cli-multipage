const ENV = {
  // 开发环境
  local: {
    API_URL: 'http://api.t.hq.com',  // api接口地址
    SSO_URL: 'http://sso.t.hq.com',  // sso登录地址
    WXAPPID: 'wxbcc8e89d0f71111',    // 微信分享
  },
  // 测试环境  
  test: this.local,
  // 预览环境
  pre: {
    API_URL: 'http://api.pre.hq.com',
    SSO_URL: 'http://sso.pre.hq.com',
    WXAPPID: 'wxbcc8e89d0f712222',
  },
  // 生产环境
  production: {
    API_URL: 'https://api.hq.com',
    SSO_URL: 'https://sso.hq.com',
    WXAPPID: 'wxbcc8e89d0f713333',
  }
}

module.exports = ENV