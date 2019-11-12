// module.exports = {
//   publicPath: './',
//   pages: {
//     index: {
//       // page 的入口
//       entry: 'src/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'Index Page',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'index']
//     },
//     a: {
//       // page 的入口
//       entry: 'src/modules/a/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'a/index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'A Page',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'a']
//     },
//     b: {
//       // page 的入口
//       entry: 'src/modules/b/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'b/index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'B Page',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'b']
//     },
//     c: {
//       // page 的入口
//       entry: 'src/modules/c/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'c/index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'C Page',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'c']
//     }
//   },
//   runtimeCompiler: true
// }

let objectProject = {
  index: {
    // page 的入口
    entry: 'src/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'index.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Index Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  a: {
    // page 的入口
    entry: 'src/modules/a/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'a/index.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'A Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'a']
  },
  b: {
    // page 的入口
    entry: 'src/modules/b/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'b/index.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'B Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'b']
  },
  c: {
    // page 的入口
    entry: 'src/modules/c/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'c/index.html',
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'C Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'c']
  }
}
let page = {}
let projectname = process.argv[3] // 获取build后面的参数确定执行哪个文件
if (process.env.NODE_ENV === 'development') {
  page = objectProject// 判断开发环境不用
} else {
  // 假如命令npm run build-index,
  // 就会得到projectname=index
  projectname === 'all'
    ? page = objectProject
    : page[projectname] = objectProject[projectname]
}
module.exports = {
  publicPath: './', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
  pages: page,
  productionSourceMap: false,
  runtimeCompiler: true
}
