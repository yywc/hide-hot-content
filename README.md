# 前言
不知不觉，知乎上的“热门内容”越来越多了，竟有了一种刷微博的感觉，于是写了这个简易版插件。[油猴地址](https://greasyfork.org/zh-CN/scripts/40741-%E5%B1%8F%E8%94%BD%E7%9F%A5%E4%B9%8E%E7%83%AD%E9%97%A8%E5%86%85%E5%AE%B9)

# 使用方法
+ 下载项目到某个文件夹(比如桌面)
+ 在谷歌浏览器输入地址 chrome://extensions/
+ 打开开发者模式
+ 加载已加压的扩展程序即可

# 思路
最开始是采用监听知乎列表条数变化的方式，然后通过操作 DOM 元素，匹配到“热门内容”的就给 display: none 掉，后来经测试发现一旦第一次加载的数据中“热门内容”过多，页面不能滑动来使数据变化，便触发不了之后的操作，导致页面只有几条数据甚至没有数据。
后来看到大佬顾轶灵的[文章](https://zhuanlan.zhihu.com/p/35746125)，便重构了一下，改 display: none 为模拟点击右边的不感兴趣按钮，达到了想要的效果。
