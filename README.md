# WechatSogouJS
基于搜狗微信搜索的微信公众号JS爬虫，目前此项目仅爬取 URL（临时），请在URL有效期内，及时使用其他方式爬取内容。推荐使用
[Chyroc/WechatSogou](https://github.com/Chyroc/WechatSogou) 的Python爬虫做进一步的获取。

## 友情链接
感谢 @Chyroc 的 WechatSogou 项目 [Chyroc/WechatSogou](https://github.com/Chyroc/WechatSogou) 以及此项目试图解决的 [Chyroc/WechatSogou#53 issue](https://github.com/Chyroc/WechatSogou/issues/53)

## Usage:
WechatSogouJS almost done! I will update the README && Usage soon! 

If you are interested, contact me, thx! 

## Todo:
- weixin.sogou.com PC web 
    - [x] article search     
    - [ ] account search
    - [x] pass the Captcha
    - [x] manual login with QQ / wechat QR 
- weixin.sogou.com WAP web
    - [ ] article search
    - [ ] account search
    - [x] pass the Captcha
    - [ ] auto login with QQ
    - [ ] clean cookie when blocked by antispider
- mp.weixin.qq.com TEMP url
    - [ ] grab the article page
    - [ ] grab the account page
    - [ ] pass the Captcha

## Features of All Different Approach (current versions)
- Chrome Ext
    - easy to code 
    - easy to install 
    - manual login with QQ / wechat QR
    - manual pass the Captcha 
    - (warning: UNSTABLE) auto pass the Captcha
- Electron
    - hard to code 
    - easy to install 
    - manual login with QQ / wechat QR
    - (info: STABLE) auto pass the Captcha
- RECOMMEND: Nightmare.js
    - easy to code 
    - easy to install 
    - manual login with QQ / wechat QR
    - (info: STABLE) auto pass the Captcha
    - IMPORTANT: high level coding
    - IMPORTANT: you can choose Headless / no-Headless
- DEPRECATED: Phantom.js
    - Headless, not recommend