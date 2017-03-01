# 短地址生成
> 利用谷歌提供的的api实现

# 界面与其他功能
> 陆续完善中

# google_key 
这个的话可以去谷歌开发者开发者中心申请 [https://console.developers.google.com](https://console.developers.google.com) ，因为我加了域名限制，所以只能在surl.mimeay.cc使用

# 线上地址访问

格式：http://surl.mimeay.cc/short_url?long_url={url}
 
例子：http://surl.mimeay.cc/short_url?long_url=https://baidu.com

返回的格式如下：
```
{
  short_url : xxxxx
}
```

# 说明
本来想做成命令行的方式去生成，但是生成需要用到谷歌提供的api，需要翻墙才能用。虽然可以依赖我放在线上的服务【放在香港服务器，可以翻墙】，但不排除服务器或者域名的更换导致不能试用，所以就没有做这一块了。
 
 
