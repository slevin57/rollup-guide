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



## 2 插件
## 3 报错
## 4 其他