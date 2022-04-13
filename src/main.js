import { createApp } from 'vue'
// 编辑插件
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 显示插件
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// html显示插件
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
// 引入使用主题的样式
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// 引入你所使用的主题 此处以 github主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import Prism from 'prismjs';

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);
// markdown 解析使用 markdown-it (opens new window)来实现，代码块解析使用 prism (opens new window)来实现。
VueMarkdownEditor.use(vuepressTheme, {
    Hljs: hljs,
    Prism,
    extend(md) {
        // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
        // md.set(option).use(plugin);
      },
  }),createLineNumbertPlugin();

  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });

const app= createApp(App)
.use(router).use(VueMarkdownEditor)
.use(ElementPlus).use(VMdPreview).use(VMdPreviewHtml); // markDown 显示;
app.mount('#app')
