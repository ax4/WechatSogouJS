# WechatSogouJS
基于搜狗微信搜索的微信公众号JS爬虫，目前此项目仅爬取 URL（临时），请在URL有效期内，及时使用其他方式爬取内容。推荐使用
[Chyroc/WechatSogou](https://github.com/Chyroc/WechatSogou) 的Python爬虫做进一步的获取。

## 友情链接
感谢 @Chyroc 的 WechatSogou 项目 [Chyroc/WechatSogou](https://github.com/Chyroc/WechatSogou) 以及此项目试图解决的 [Chyroc/WechatSogou#53 issue](https://github.com/Chyroc/WechatSogou/issues/53)

## Usage:

打开浏览器 console, 复制 load.js 中的代码到 console 中，按 enter.

```javascript
NextPage() //访问下一页
getArticlesAccount() //获得文章的公众号
getArticlesHref() //获得文章的 URL（临时的，请使用其他爬虫爬取文章内容）
```


## Todo:
* [ ] loadJS after refresh the page 