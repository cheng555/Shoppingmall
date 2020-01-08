# 网上商城
Node. js mongodb  websocket
但是我需要的是做个网上商城
不需要做购物车，简单的浏览商品，商品分类，然后点击一个商品可以看他的详细信息。
--------------------------
传统的商城系统;分管理端\客户端
查重问题

## Setup
```bash
# 后端api
cd server && npm i # yarn
npm run start

# 前端
cd client && npm i # yarn
npm run dev
npm run dev:admin
```


## 技术栈
1. 前台C端
  - Vue
  - Vue-route
  - Vuex
  - element-ui
  - webpack
  - ...
2. 管理端
  - express
  - node
  - jsonwebtoken
  - socket.io
  - nodemon
  - mongoose
  - websocket
  - ...

## 部署说明
1. 环境要求: 
  - MongoDB环境启动27017；检查：localhost:27017是否能访问通
2. 进入client/server目录分布执行npm install
3. 进入server目录执行npm run start(这是启动api接口)
4. 进入client目录执行npm run dev(这是启动C端项目)
5. 同样在client目录执行npm run dev:admin(启动管理后台)
6. 访问localhost:8080前台地址；localhost:8081后台管理地址
