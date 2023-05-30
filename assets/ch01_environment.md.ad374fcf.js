import{_ as s,c as a,o as n,O as l}from"./chunks/framework.41379913.js";const h=JSON.parse('{"title":"环境","description":"简单介绍下JavaScript编程语言，以及对应的环境准备工作。","frontmatter":{"description":"简单介绍下JavaScript编程语言，以及对应的环境准备工作。"},"headers":[],"relativePath":"ch01_environment.md"}'),o={name:"ch01_environment.md"},p=l(`<h1 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h1><h2 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h2><p>JavaScript是目前使用最广泛的编程语言之一。作为互联网和移动计算时代的基础支撑语言，从基本的生产力工具，到日常的泛娱乐平台，它活跃在每一次你浏览网站、使用App的过程中，提供基本的运算和流程保障。</p><p>JavaScript的诞生和发展也颇具传奇色彩，Brendan Eich在几天的时间内设计并实现了这门编程语言，影响了后面几十年的软件和技术的发展。如今几乎每一个设备都接入了JavaScript，深入到了我们生活的方方面面。作为一门工业级的编程语言，JavaScript由欧洲计算机制造商协会（ECMA）制定标准化的行为和定义，来规范这个语言的使用和发展方向。TC39技术委员会也一直在更新JavaScript的功能，让这个有二十多年历史的旧技术不断焕发新的活力。</p><p>JavaScript的环境触手可及。在电脑端你可以随时打开一个现代的浏览器，页面上右键菜单中选择“Inspect”或者“查看/检查元素”，选择“控制台（Console）”标签。如果你是在移动端或者浏览器不支持，也可以通过一些工具比如<a href="http://code.hnldesign.nl/demo/hnl.MobileConsole.html" target="_blank" rel="noreferrer">移动端Console</a>来体验JavaScript控制台。</p><h2 id="编写代码" tabindex="-1">编写代码 <a class="header-anchor" href="#编写代码" aria-label="Permalink to &quot;编写代码&quot;">​</a></h2><p>当需要写大量代码组合使用的时候，你可以通过本地编辑Web页面的方式来编写JavaScript代码。JavaScript是Web端的基本编程语言，可以稳定地运行在大多数现代浏览器中。</p><p>通过文件编辑器创建下面的代码，命名为<code>index.html</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Introduction to Programming</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>在<code>&lt;script ...&gt;</code>和<code>&lt;/script&gt;</code>之间，就是你编写JavaScript代码的地方。编写完成后，用浏览器打开（或者刷新）这个文件，就能看到对应的效果和执行内容。</p><p>比如上面的代码，就是在控制台打印“hello world”。</p><p>本书推荐使用<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a>作为基本的代码编辑工具。你可以在官网进行下载和安装。官网也有详细的使用教程。</p><p>MDN 中对<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Discover_browser_developer_tools" target="_blank" rel="noreferrer">浏览器开发者工具</a>和<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software" target="_blank" rel="noreferrer">基本的工具软件</a>有更为完整的介绍，可以参考。如果你想了解更多关于Web设计和开发的知识，MDN也有完备的文档供参考。</p><p>一切准备就绪的话，我们就开始吧。</p>`,14),t=[p];function e(r,c,D,F,i,y){return n(),a("div",null,t)}const _=s(o,[["render",e]]);export{h as __pageData,_ as default};
