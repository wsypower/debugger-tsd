/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-01 14:01:30
 * @LastEditTime: 2023-03-01 14:31:34
 * @LastEditors: wsy
 */
const fs = require('fs/promises');
const path = require('path');

(async function () {
  const filePath = path.join(process.cwd(), 'package.json');
  const fileContent = await fs.readFile(filePath, {
    encoding: 'utf-8'
  });
  await fs.writeFile('./package2.json', fileContent);
})();
