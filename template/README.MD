1. **目录结构**

   dist  项目build后生成的目录，用于项目发布

   node_modules npm包目录，查看源码

   public 静态资源目录

   src 

   tests 测试代码, 单元测试

   package.json 配置文件

   

   src

   | -- api http ---------------- 请求 axios

   | -- assets -----------------  静态资源目录

   | -- components ---------- 全局公共组件

   | -- config ------------------- 全局配置

   | -- permission ------------- 路由权限

   | -- router -------------------- 路由，路径设置

   | -- store --------------------- 全局变量管理 vuex

   | -- styles -------------------- 全局样式

   | -- utils ---------------------- 工具

   | -- views -------------------- 视图页面

   | -- main.js ------------------ 入口， 引用包、配置

   ----------------

2. **代码规范 （ 参考CleanCode ）**

   小驼峰 helloWorld

   大驼峰 HelloWorld

   中横线 hello-world

   大写 HELLO_WORLD

   **2.1 文件命名规范**

   ​	组件component命名使用大驼峰 LoginComponent

   ​	页面view使用小驼峰 homeView

   ​	单个或多个文件中需要使用的配置项使用全大写 USER_TOKEN

   **2.3 js规范 （ 参考ES6 ）**

   ​	禁止使用var，用let代替。不会修改的变量用const声明

   ```js
   const defaultUserInfo = getUserInfo();
   let username = defaultUserInfo.name;
   ```

   ​	命名变量、函数时 名称需具体

   ```js
   let a; // wrong
   let username; // correct
   
   function getName() {}; // wrong
   function getUserName() {}; // correct
   ```

   ​	一个函数一个功能

   ```js
   async function initUser() {
       const { data } = await this.getUserName();
       this.setUserName(data.name || 'default-name';)
   }
   async function getUserName() {
       return await getUserName();
   }
   function setUserName(name) {
      	this.user.name = name;
   }
   ```

   ​	异步操作用try catch finally包裹

   ```js
   try {
       this.loading = true;
   	const { data } = await getUserInfo();
       /* ... */
   } catch (err) {
       console.error(err);
       this.$message.error(err);
   } finally {
       this.loading = false;
   }
   ```

   ​	防御式编程

   ```js
   // wrong
   const message = response.data.message; 
   // correct
   if (response.data && response.data.message) { 
       message = response.data.message;
   } 
   ```

   ```js
   const  username = getUserName() || 'default-name'; // 需要默认值时使用
   ```

   **2.4 css、scss 规范**

   css命名请使用中横线连接

   ```scss
   .headerTitle { /* ... */ } // wrong
   .header-titgle { /* ... */ } // correct
   ```

   尽量减少内联样式使用，使用class代替

   ```scss
   // wrong
   <div style="color: red;"></div>
   // correct
   <div class="red-color-font"></div> 
   <style>
   .red-color-font {
       color: red;
   }
   </style>
   ```

   class命名需符合层级

   ```scss
   // wrong
   <div class="header">
   	<div class="title"></div>
   </div>
   
   // correct
   <div class="header">
   	<div class="header-title"></div>
   </div>
   ```

   组件style需加上scoped以限制作用范围

   ```scss
   <style scoped>
   /* ... */
   </style>
   ```

   全局样式 请放入全局样式styles目录下，请避免重复编写

   ------------------------

3. **git规范**

   **3.1 分支**

   一个功能一个分支

   功能模块开发请以 feature 开头

   ``` js
   git checkout -b feature-home-view // 主页面开发分支
   ```

   修改bug请以--fix-bug 结尾

   ```js
   git checkout -b feature-home-view--fix-bug // 主页面维护分支
   ```

   **3.2 提交**

   分支代码尽量以功能点 分多次commit 不要一次提交所有代码

   ```js
   git checkout -b feature-home-view
   git commit -m "完成主页导航栏"
   git commit -m "完成主页侧边栏"
   git push origin feature-home-view
   ```

   **3.3** **合并与冲突**

   代码提交前请切换develop分支(开发分支)并拉取最新代码, 并合并

   ```
   git pull origin develop
   git checkout feature-home-view
   git merge develop
   ```

   合并后，请修改包含conflict的冲突代码，之后再提交

   ```js
   git add .
   git commit -m "解决合并冲突"
   git push origin feature-home-view
   ```

   **3.4 请在develop（开发分支）上创建新分支**

   ```
   git checkout develop;
   git checkout -b feature-home-view
   ```

   3.5 设置git大小写敏感, ( 区别于linux，windows中开发对大小写不敏感)

   ```
   git config core.ignorecase false
   ```

   

4. **npm 包管理工具**

   替换淘宝镜像

   ``` 
   npm config set registry https://registry.npm.taobao.org
   ```

   安装npm包

   ```js
   npm install SOME_PACKAGE --save
   npm i SOME_PACKAGE -S // 简写
   
   -S = --save
   -D = --save -dev
   ```

   启动vue服务

   ```
   npm run serve
   ```

   合并代码后注意是否增加了新模块，使用下述指令进行安装

   ```
   npm i
   ```

   更新npm

   ```js
   npm i npm -g // 安装在全局
   ```

   寻找组件、包时注意，代码下载数和维护已经issue数，选择最佳工具

   <img src="C:\Users\hfutsora\AppData\Roaming\Typora\typora-user-images\image-20200411173505682.png"  style="margin-left: 0px; zoom: 67%;" />

   -------------

5. **vscode**

   推荐开发vue项目使用vscode，( vue作者也用的这个 )

   常用插件：

   ​	todo-tree ------ 标记待完成代码

   ​	Prettier --------- 代码格式管理 lint工具

   ​	Vetur ------------ vue工具

   ​	vscode-icons -- 添加目录图标

   ​	sass ------------- 添加sass/scss代码检测与提示

   git源代码管理：

   ​	点开源代码模块页面 Ctrl + Shift  + G

   缩进

   ​	设置tab缩进，缩进大小为 2

   格式化

   ​	Alt + Shift + F

   

   <div style="float: right;">
   @author &nbsp;&nbsp;hfutsora </p> <br/>
   @address  <a href src="http://106.15.189.174/#/resume">http://106.15.189.174/#/resume
   </div>

