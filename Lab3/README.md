# 2025年夏季《移动软件开发》实验报告



<center>姓名：聂宇航  学号：23170001072</center>

| 姓名和学号？         | 聂宇航，23170001072              |
| -------------------- | -------------------------------- |
| 本实验属于哪门课程？ | 中国海洋大学22夏《移动软件开发》 |
| 实验名称？           | 实验1：第一个微信小程序          |
| 博客地址？           | XXXXXXX                          |
| Github仓库地址？     | XXXXXXX                          |

（备注：将实验报告发布在博客、代码公开至 github 是 **加分项**，不是必须做的）



## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；2、学习不使用模板手动创建小程序的方法。



## 二、实验步骤

列出实验的关键步骤、代码解析、截图。

先注册百度智能云网站，在里面选图像识别，输入项目名称和描述，就可以得到了图像识别的API Key和Secret Key了

![image-20250901151623453](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901151623453.png)

![image-20250901151927579](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901151927579.png)

然后将项目clone下来：git clone https://gitee.com/xxwan/garbage-sorting-applet.git

将其导入我们的开发工具中，后端服务实验“微信云开发”：

![image-20250901152335737](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152335737.png)

![image-20250901152358822](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152358822.png)

进入云开发

![image-20250901152557532](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152557532.png)

右上角可以看到cloud-id，把它复制下来：

![image-20250901152631629](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152631629.png)

将其填入app.js的第65行的env中：

![image-20250901152750618](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152750618.png)

![image-20250901152807208](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152807208.png)

然后再pages/search/search.js中的第29和30行找到apisecret和apikey填入：

![image-20250901152858131](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901152858131.png)

![image-20250901153047662](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153047662.png)

检查project.config.json中是否有自动填上appid，没有的话就填上去

![image-20250901153129599](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153129599.png)

然后把这4个文件夹都右键点“上传并部署：云端安装依赖”，等到他们全变绿

![image-20250901153505204](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153505204.png)



点击小程序开发工具的云开发，点击数据库

![image-20250901153726544](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153726544.png)

创建集合`trash`, `type`

依次导入`trash.json`, `type.json`文件

![image-20250901153745957](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153745957.png)

![image-20250901153815662](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153815662.png)

![image-20250901153902312](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901153902312.png)

## 三、程序运行结果

列出程序的最终运行结果及截图。

在搜索中，可以看到搜索栏和很多热门搜索

![image-20250901154537079](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901154537079.png)

随便点一个热门搜索都可以看到它的分类：

![image-20250901154747309](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901154747309.png)

再点进去可以看到详细信息：

![image-20250901154738106](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901154738106.png)

## 四、问题总结与体会

描述实验过程中所遇到的问题，以及是如何解决的。有哪些收获和体会，对于课程的安排有哪些建议。

查询的时候查不了，问了AI也没有用：

![屏幕截图 2025-09-01 145205](C:\Users\ASUS\Pictures\Screenshots\屏幕截图 2025-09-01 145205.png)

然后我突然发现，为什么教程了这四个文件夹全是绿的：

![image-20250901155443733](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250901155443733.png)

但我只绿了getHotltems一个文件夹，它不是指着这里吗

然后我把这4个文件夹都右键点“上传并部署：云端安装依赖”，等到他们全变绿

发现就让可以了，没看清楚文字导致的