## 基于weback4构建的多页面应用脚手架
### 项目目录如下

.
├── README.md 
├── config  &nbsp;&nbsp;&nbsp;&nbsp;配置目录  
│   ├── env.config.js &nbsp;&nbsp;&nbsp;&nbsp;环境变量配置    
│   ├── webpack.base.js &nbsp;&nbsp;&nbsp;&nbsp;webpack基础配置   
│   ├── webpack.build.js &nbsp;&nbsp;&nbsp;&nbsp;webpack本地开发配置   
│   └── webpack.local.js &nbsp;&nbsp;&nbsp;&nbsp;webpack打包配置  
├── dist  &nbsp;&nbsp;&nbsp;&nbsp;打包生成的目录    
│   ├── index.html  &nbsp;&nbsp;&nbsp;&nbsp;首页  
│   ├── p7 &nbsp;&nbsp;&nbsp;&nbsp;二级页面目录  
│   │   └── page1.html         
│   └── public  &nbsp;&nbsp;&nbsp;&nbsp;静态资源目录  
│       ├── css &nbsp;&nbsp;&nbsp;&nbsp;   
│       │   ├── index.f67d9381.css           
│       │   └── p7  
│       │       └── page1.c2874931.css  
│       ├── img  &nbsp;&nbsp;&nbsp;&nbsp; 
│       │   └── 4.jpg
│       └── js  &nbsp;&nbsp;&nbsp;&nbsp; 
│           ├── index.202a6075.js  
│           └── p7  
│               └── page1.644aae5c.js  
├── package.json  
├── postcss.config.js  &nbsp;&nbsp;&nbsp;&nbsp;postcss配置文件  
├── src  &nbsp;&nbsp;&nbsp;&nbsp;  源码目录
│   ├── assets  &nbsp;&nbsp;&nbsp;&nbsp;  静态资源目录  
│   │   ├── font  &nbsp;&nbsp;&nbsp;&nbsp;  字体文件目录  
│   │   │   ├── pui_Montserrat-Bold.eot  
│   │   │   ├── pui_Montserrat-Bold.svg  
│   │   │   ├── pui_Montserrat-Bold.ttf  
│   │   │   ├── pui_Montserrat-Bold.woff  
│   │   │   ├── xp_iconfont.eot  
│   │   │   ├── xp_iconfont.svg  
│   │   │   ├── xp_iconfont.ttf  
│   │   │   └── xp_iconfont.woff  
│   │   ├── img  &nbsp;&nbsp;&nbsp;&nbsp;  图片目录 
│   │   │   ├── 4.jpg    
│   │   │   └── p7    
│   │   │       ├── 4.jpg  
│   │   │       └── 5.png  
│   │   ├── js  &nbsp;&nbsp;&nbsp;&nbsp;  js目录 
│   │   │   ├── index.js  
│   │   │   └── p7  
│   │   │       └── page1.js  
│   │   ├── lib &nbsp;&nbsp;&nbsp;&nbsp;  公共组件目录 
│   │   │   ├── fetch.js  
│   │   │   └── ui.js   
│   │   ├── scss &nbsp;&nbsp;&nbsp;&nbsp;  scss目录 
│   │   │   ├── _font.scss  
│   │   │   ├── index.css  
│   │   │   └── p7  
│   │   │       └── page1.scss  
│   │   └── vender  &nbsp;&nbsp;&nbsp;&nbsp;  引用插件目录    
│   ├── layout  &nbsp;&nbsp;&nbsp;&nbsp;  公共布局目录   
│   │   ├── footer.html   
│   │   ├── header.html  
│   │   └── meta.html  
│   └── pages  &nbsp;&nbsp;&nbsp;&nbsp;  html目录 
│       ├── index.html   
│       └── p7  
│           └── page1.html  
├── webpack.config.js