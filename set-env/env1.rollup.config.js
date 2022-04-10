/*
 * @Date 2022-04-10 22:48:39 +0800
 * @LastEditors PC
 * @LastEditTime 2022-04-10 23:07:15 +0800
 * @FilePath /set-env/env1.rollup.config.js
 * @Description 这里填入描述
 * @Author PC
 * 
 */


console.log(`process.env.production:`, process.env.production);
console.log(`typeof process.env.uat:`, process.env.uat);
console.log(`typeof process.env.version:`, process.env.version);

console.log(`process.env.uat:`, process.env.production === 'true');
console.log(`process.env.uat === 'false':`,process.env.uat === 'false');
console.log(`process.env.version === '100':`,process.env.version === '100');

export default {
    input: 'src/module1.js',
    output: {
        file: './dist/bundle.js',
        format: 'esm'
    }
};

