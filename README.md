
## Setup
```bash
cd server && npm i
npm run start

cd client && npm i
npm run dev
npm run dev:admin
```


## 技术栈
Chinese version
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

English version
1. Front end C
  - Vue
  - Vue-route
  - Vuex
  - element-ui
  - webpack
  - ...

  2. Admin end
  - express
  - node
  - jsonwebtoken
  - socket.io
  - nodemon
  - mongoose
  - websocket
  - ...
## 部署说明
Chinese version
1. 环境要求: 
  - MongoDB环境启动27017；检查：localhost:27017是否能访问通
2. 进入client/server目录分布执行npm install
3. 进入server目录执行npm run start(这是启动api接口)
4. 进入client目录执行npm run dev(这是启动C端项目)
5. 同样在client目录执行npm run dev:admin(启动管理后台)
6. 访问localhost:8080前台地址；localhost:8081后台管理地址

English version
1. Environmental requirements:
-Mongodb environment starts 27017; check whether localhost: 27017 can access 
2. Enter the client / server directory and execute NPM install
3. Enter the server directory to execute NPM run start (this is the start API interface)
4. Enter the client directory to execute NPM run dev (this is the C-side project)
5. Also execute NPM run dev: admin in the client directory (start the management background)
6. Access localhost: 8080 foreground address; localhost: 8081 background management address 1