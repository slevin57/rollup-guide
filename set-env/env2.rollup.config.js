/*
 * @Date 2022-04-10 22:34:55 +0800
 * @LastEditors PC
 * @LastEditTime 2022-04-10 23:08:16 +0800
 * @FilePath /set-env/env2.rollup.config.js
 * @Description 这里填入描 述
 * @Author PC
 * 
 */

const isProd = process.env.NODE_ENV === 'production'

console.log(`process.env.NODE_ENV:`,process.env.NODE_ENV);
console.log(`isProd:`,isProd);

export default {
    input: 'src/module1.js',
    output: {
        file: './dist/bundle.js',
        format: 'esm'
    }
};

