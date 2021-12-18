(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{459:function(t,e,s){"use strict";s.r(e);var a=s(12),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"vercel-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vercel-是什么"}},[t._v("#")]),t._v(" vercel 是什么？")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vercel.com/docs#",target:"_blank",rel:"noopener noreferrer"}},[t._v("vercel"),s("OutboundLink")],1),t._v(" 是国外的一家云服务公司，提供在线打包和部署服务，目前暂时没有收费。对于组件库这种静态网站来说(如果是公司提供了服务器另当别论)，基本就是纯展示，能使用免费肯定就用免费的。")]),t._v(" "),s("h3",{attrs:{id:"如何使用-vercel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-vercel"}},[t._v("#")]),t._v(" 如何使用 vercel？")]),t._v(" "),s("p",[t._v("使用 vercel 的原因之一就是如果你会使用 "),s("code",[t._v("Gitlab")]),t._v("、"),s("code",[t._v("Github")]),t._v("之类的代码托管网站，你就会发现 vercel 的使用特别简单，因为它支持你从 "),s("code",[t._v("Gitlab")]),t._v("、"),s("code",[t._v("Github")]),t._v("导入仓库。我们看看具体的操作步骤：")]),t._v(" "),s("h4",{attrs:{id:"_1-注册账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册账号"}},[t._v("#")]),t._v(" 1. 注册账号")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601092242200.lxp3oqqb7qo.png"}})]),s("p",[t._v("直接使用我们自己的 "),s("code",[t._v("Github")]),t._v(" 账号就行了，")]),t._v(" "),s("h4",{attrs:{id:"_2-导入github仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入github仓库"}},[t._v("#")]),t._v(" 2. 导入Github仓库")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601091843777.1d12xwi4ql28.png"}})]),s("p",[t._v("直接输入Github仓库的链接就行，vercel会自动将代码拉取下来。")]),t._v(" "),s("h4",{attrs:{id:"_3-填写项目的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-填写项目的信息"}},[t._v("#")]),t._v(" 3. 填写项目的信息")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601093720002.6fx9rho5b9s0.png"}})]),s("p",[t._v("填写完毕后，直接点 "),s("code",[t._v("deploy")]),t._v(" 发布就可以了。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("发布目录是项目根目录下面的 "),s("code",[t._v("public")]),t._v(" 文件夹 或者 "),s("code",[t._v("dist")]),t._v(" 文件夹。")])]),t._v(" "),s("h3",{attrs:{id:"如何管理项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何管理项目"}},[t._v("#")]),t._v(" 如何管理项目")]),t._v(" "),s("p",[t._v("发布后，管理项目的页面如下图。")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601100218473.kzfjmtamgk0.png"}})]),s("h4",{attrs:{id:"修改默认的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改默认的配置"}},[t._v("#")]),t._v(" 修改默认的配置")]),t._v(" "),s("p",[t._v("指定发布的项目的框架：")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601100733186.1unhgxw15zls.png"}})]),s("h4",{attrs:{id:"自定义构建命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义构建命令"}},[t._v("#")]),t._v(" 自定义构建命令")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601101245798.67k623lyp0g0.png"}})]),s("p",[t._v("这个配置非常重要，解释下红框的两个配置项：")]),t._v(" "),s("ul",[s("li",[t._v("build command 指定发布时打包的命令 默认是执行 "),s("code",[t._v("npm run build")])]),t._v(" "),s("li",[t._v("output directory 发布的目录")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("配置后，需要打开后面的 "),s("code",[t._v("override")]),t._v(",表示覆盖默认的配置。")])]),t._v(" "),s("h4",{attrs:{id:"指定根目录和node版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定根目录和node版本"}},[t._v("#")]),t._v(" 指定根目录和node版本")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{staticStyle:{height:"400px"},attrs:{src:"https://cdn.jsdelivr.net/gh/MssText/learn@master/images/image-20210601101740917.5zkjz6uytoo0.png"}})]),s("p",[t._v("这样，文档就发布成功了。")])])}),[],!1,null,null,null);e.default=r.exports}}]);