/*
 * @Date 2022-04-12 11:04:31 +0800
 * @LastEditors PC
 * @LastEditTime 2022-04-12 11:24:10 +0800
 * @FilePath /output.footer/rollup.config.js
 * @Description 这里填入描述
 * @Author PC
 * 
 */

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

