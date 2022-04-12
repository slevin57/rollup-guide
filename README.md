[toc]

## 1 配置
### 1-1 配置环境变量
两种方式来设置环境变量：

方式一(官方文档指定)：通过`--environment`参数指定环境变量

在`package.json`中添加script`"set-env1": "rollup --config ./set-env/env1.rollup.config.js --environment production,uat:false,version:100",`

执行`yarn set-env2`，可以看到打印结果：

```js
console.log(`process.env.production:`, process.env.production); // 'true'
console.log(`typeof process.env.uat:`, process.env.uat); // 'false'
console.log(`typeof process.env.version:`, process.env.version); // '100'

console.log(`process.env.uat:`, process.env.production === 'true');  // true
console.log(`process.env.uat === 'false':`,process.env.uat === 'false');  // true
console.log(`process.env.version === '100':`,process.env.version === '100'); // true
``` 
![](http://qiniu.cuixiaodao.com//202204102304800.png)

这里注意传入的参数都是**字符串**形式。



方式二：`NODE_ENV=production`

在`package.json`中添加一条script：` "set-env2": "NODE_ENV=production rollup -c ./set-env/env2.rollup.config.js -e"`

执行`yarn set-env1`可以看到打印结果：

```js
const isProd = process.env.NODE_ENV === 'production'

console.log(`process.env.NODE_ENV:`,process.env.NODE_ENV); // 'production'
console.log(`isProd:`,isProd);  // true
```
![](http://qiniu.cuixiaodao.com//202204102308275.png)

### 1-2 `output.banner`
把自定义的内容插入到打包后文件的最前面，类似banner。可以把注释、或者需要最早执行的一些代码（类似console)放在最前面。
也有个插件`rollup-plugin-banner`可以实现类似功能。

执行`yarn output.banner`

源文件`rollup.config.js`:
```js
import pkg, { name, version } from '../package.json'

const banner =
    '/*!\n' +
    ' * output.banner会在bundle文件最前面插入内容\n' +
    ` * ${name}.js v${version}\n` +
    ` * (c) 2020-${new Date().getFullYear()} By ${pkg.author}\n` +
    ` * 更新时间：${new Date()} \n` +
    ' */\n'

export default {
    input: 'src/module1.js',
    output: {
        file: './dist/bundle.js',
        format: 'esm',
        banner
    },
};
```

打包后的文件：

![](http://qiniu.cuixiaodao.com//202204121119802.png)

### 1-3 `output.footer`

把自定义的内容插入到打包后文件的最后面，类似footer。可以把注释、或者需要最早执行的一些代码（类似console)放在最后面。

执行`yarn output.footer`

源文件`rollup.config.js`:

```js
import pkg, { version } from '../package.json'

const footer = `/* follow me on Twitter!Version is ${version} */`

export default {
    input: 'src/module1.js',
    output: {
        file: './dist/bundle.js',
        format: 'esm',
        footer
    },
};
```

打包后的文件：

![](http://qiniu.cuixiaodao.com//202204121124513.png)


### 1-4 单入口
只有一个入口文件的时候，输出文件可以通过`output.file`及`output.dir`指定；
但如果有多个入口文件，输出文件只能通过`output.dir`指定。

### 1-5 多入口



## 2 插件
## 3 报错
## 4 其他