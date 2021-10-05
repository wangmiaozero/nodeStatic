# About

整个项目分为两部分：前台项目接口、后台管理接口。涉及登陆、注册、自动部署、文章展示、文章详情、文章分类、获取用户信息、用户收藏等，构成一个完整的流程。

**注：此项目纯属个人瞎搞，不用于任何商业用途。**

# 说明


> 如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^\_^

> 或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

> 开发环境 macOS windows10 nodejs 10.12.4

> 部署环境 阿里云 CentOS 7.2 64 位

> 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍


## 技术栈

nodejs + koa2 + es6/7 + redis + nginx + mysql +md5 + pm2+ koa-logger + koa-onerror

## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node (10.12.4 及以上版本)
```

```

cd blogs-wechat

npm install

npm run serve

pm2 deploy deploy.yaml production upddate

```

## 效果演示

#### 后台管理地址 http://www.eggadmin.wangmiaozero.cn/

### 前端网址

###### 移动端扫描下方二维码 小程序

<img src="https://oss.wangmiaozero.cn/images/gh_2bc7e811a6ed_430.jpg" width="250" height="250"/>

### 后台管理系统网址

## 目标功能

- [x] 文章详情 -- 完成
- [x] 文章分类 -- 完成
- [x] 文章列表 -- 完成
- [x] 获取用户信息 -- 完成
- [x] 用户收藏 -- 完成 ✨✨
- [x] 个人中心 -- 完成
- [x] 测试接口 -- 完成
- [x] 用户点赞 -- 完成
- [x] 用户授权绑定-- 完成
- [x] 我的收藏列表 -- 完成
- [x] 每日签到 -- 完成
- [x] 用户信息解密 -- 完成
- [x] 工具类 -- 完成
- [x] 服务配置 -- 完成
- [x] 面具接口 -- 完成
- [x] 获取文章评论 -- 完成
- [x] 插入文章评论 -- 完成
- [x] 管理员权限验证 --
- [x] 超级管理员 --
- [x] 日志输出 -- 完成
- [x] 详情错误 -- 完成
- [x] 前后台路由同构 -- 完成
- [x] pm2 自动发布部署-- 完成

<!-- ## API 接口文档

## [接口文档地址](https://github.com/aa.md) -->

## 部分截图

## 项目布局

```
.
├── blogs-wechat     koa2后端服务项目(前后端分离)
│   │
│   ├── api
│   │   └── index.js                  koa2-mysql数据池连接封装
│   ├── config
|   |     └── index.js                服务与数据库配置
│   ├── controller
│   │   ├── admin                     后台管理系统控制器
│   │   └── web                       前台系统控制器
│   │       ├── articleDetail.js      文章详情接口
│   │       ├── articleType.js        文章分类接口
│   │       ├── articleTypeList.js    文章列表接口
│   │       ├── authorization.js      获取用户信息接口(解密用户信息ok)
│   │       ├── collect.js            收藏接口
│   │       ├── getUserSignList.js    个人中心接口
│   │       ├── index.js              测试接口
│   │       ├── like.js               点赞接口
│   │       ├── login.js              用户授权绑定接口
│   │       ├── myCollectList.js      我的收藏列表接口
│   │       ├── insertComment.js      插入文章评论
│   │       ├── getComment.js         获取文章评论接口
│   │       ├── maskVersion.js        面具接口
│   │       └── sign.js               签到接口
│   ├── db
│   │   └── index.js                  数据连接
│   ├── node_modules
│   │   └──xxx.js                     依赖包
│   ├── redis
│   │   └── index.js                 redis配置封装
│   ├── routes
│   │   └── index.js                 后端路由
│   ├── utils                        工具类
│   │   ├── examineToken.js          token过期配置封装
│   │   ├── isObject.js              判断对象是否为空
│   │   ├── time.js                  时间处理
│   │   └── WXBizDataCrypt.js        wechat用户解密算法
│   ├── views                        前端静态文件托管
│   ├── .gitignore                   git忽略文件
│   ├── deploy.yaml                  pm2自动发布配置
│   ├── index.js                     服务配置
│   ├── package-lock.json            包的版本号(快速下载依赖链接)
│   ├── package.json                 模块(npm run server/依赖包)
│   │
│   └──README.md                     文档说明
.


```

