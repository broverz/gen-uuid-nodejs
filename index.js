console.clear();
console.log('.key, .json, .txt, .yml');

const path = require('path')
const fs = require('fs');
const fsPromises = require('fs/promises')
const licenseGen = require("@mcnaveen/license-gen")

const key = licenseGen(36, 6);
const name = 'brover';
const version = '1.0.0';
const licenseObject = [{ author: name, version: version, license: {key: key} }];

fs.writeFile('license.key', key, function (err) {
    if (err) throw err;
    console.log('License ::', key);
    console.log('License.key Created Successfully!');
});

fs.writeFile('license.txt', key, function (err) {
    if (err) throw err;
    console.log('License.txt Created Successfully!');
});

fs.writeFile('license.json', JSON.stringify(licenseObject, null, 4), (err) => {
    if (err) {  console.error(err);  return; };
    console.log('License.json Created Successfully!');
});

fs.writeFile('license.yml', key, (err) => {
    if (err) {  console.error(err);  return; };
    console.log('License.yml Created Successfully!');
});



// console.log(key)