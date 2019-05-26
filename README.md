## 基于weback4构建的多页面应用脚手架  

#### 项目启动  `npm run local`  

### 项目介绍:
+ 项目配置了 **local**(本地开发环境)、**test**(测试环境打包)、**pre**(预览环境打包)、**production**(生产环境打包)四种环境变量，通过 ` npm run local | test | pre | production `打包对应环境。
  
    ├──/src/pages  html文件  
    ├──/src/assets/scss  样式文件  
    ├──/src/assets/scss  js文件  
    - 需注意，如果需要划分多级目录，最好保持多级目录在以上三个目录下保持一致(例如目前示例中划分的P7文件目录)

+ **local**(开发环境)启动devServer，开发环境配置了热更替及js的sourceMap功能，方便开发。

+ 打包生成目录为dist。全局变量定义在 */config/env.config.js* ,可根据项目实际情况自行定义全局变量，例如接口地址等。

+ 已经全局注入了jQuery，正常使用即可。
  
+ 配置了sass及postcss,postscss只引用了autoprefixer，可自行配置其他插件。

+ 简单配置了eslint

+ 抽出了页面公共部分，可按照 */src/layout/header.html* 格式自行定义其他页面公共部分，并按照
*/src/pages/index.html* 内引入header的方式引入自定义部分。

### 项目目录如下:

.  
├── README.md   
├── config  &nbsp;&nbsp;&nbsp;&nbsp;配置目录  
│   ├── env.config.js &nbsp;&nbsp;&nbsp;&nbsp;全局变量配置    
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
│       ├── img     
│       │   └── 4.jpg  
│       └── js    
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


