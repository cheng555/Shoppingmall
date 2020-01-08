
## Setup
```bash
cd server && npm i
npm run start

cd client && npm i
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
