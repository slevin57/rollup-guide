/*
 * @Date 2022-04-12 11:04:31 +0800
 * @LastEditors PC
 * @LastEditTime 2022-04-12 11:18:18 +0800
 * @FilePath /output.banner/rollup.config.js
 * @Description 这里填入描述
 * @Author PC
 * 
 */

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

