# Ruokuai Offical Captcha Example (Node.js)

This is the official example by Ruokuai. See [Ruokuai Nodejs Example](http://wiki.ruokuai.com/ApiDemo_Nodejs.ashx)

See the API doc [API: Upload Image](http://wiki.ruokuai.com/%E7%AD%94%E9%A2%98(%E4%B8%8A%E4%BC%A0).ashx)


Parameter | Must Have | Type | Description
---------|----------|---------|---------|
 username	|   true	|   string      |	用户名。
 password	|   true	|   string      |	用户密码。(支持32位MD5)
 typeid	    |   true	|   int	        |   题目类型，参考 (代码表[Link](http://www.ruokuai.com/home/pricetype) )。
 timeout	|   false	|   int     	|   任务超时时间，默认与最小值为60秒。
 softid	    |   true	|   int	        |   软件ID，开发者可自行申请。
softkey	    |   true	|   string	    |   软件KEY，开发者可自行申请。
image	    |   true	|   byte	    |   题目截图或原始图二进制数据。