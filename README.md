# WechatSogouJS
基于搜狗微信搜索的微信公众号JS爬虫，目前此项目仅爬取 URL（临时），请在URL有效期内，及时使用其他方式爬取内容。推荐使用
[Chyroc/WechatSogou](https://github.com/Chyroc/WechatSogou) 的Python爬虫做进一步的获取。

## 友情链接
感谢 @Chyroc 的 WechatSogou 项目 [Chyroc/WechatSogou](https://github.com/Chyroc/WechatSogou) 以及此项目试图解决的 [Chyroc/WechatSogou#53 issue](https://github.com/Chyroc/WechatSogou/issues/53)

## 进度与方向
1. 目前在框架选择上，准备放弃 Chrome Ext \ PhantomJS 框架。Electron 框架会做简单维护，但是不会再开发新的了。一切最新的开发，会转移到 NightmareJS 框架上。

2. 在爬取对象选择上，准备放弃 weixin.sogou.com PC 版本，转而开发 wap 版本为主 & pc 版本为辅助的模式。


## Usage of Electron version:
1. Make a `config.js` file: 
```js
// this is your config.js file
var settings = {
    username: 'your_Ruokuai_username',
    password: 'your_Ruokuai_password',
    softid: 'your_Ruokuai_softid',
    softkey: 'your_Ruokuai_softkey'
};

exports.settings = settings; 

```
2. Save `config.js` under the folder `WechatSogouJS/electron`


3. Enter the `electron` folder and install the dependency with npm
```bash
cd electron 
npm install     

```

4. Start the browser
```bash
npm start
```

5. Type-in your query keyword, and click "Search Articles" 
6. On the left-hand-console, type-in
```js
spider_start(n) //'n' is how many pages you want, do not just type 'n'
```
7. After the spider finish its job, in the same console, type-in
```js
saveToFile()
```

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