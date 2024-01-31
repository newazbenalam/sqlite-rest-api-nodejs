const { getAllUsers } = require('./userController');
const { getAllProducts } = require('./productController');

module.exports = { getAllUsers, getAllProducts };

// const fs = require('fs');
// const path = require('path');

// const controllers = {};

// fs.readdirSync(__dirname)
//   .filter(file => file !== 'index.js' && file.endsWith('.js')) // Exclude this file and only include .js files
//   .forEach(file => {
//     const controllerName = path.basename(file);
//     controllers[controllerName] = require(`./${file}`);
//     print(controllers);

//   });

// module.exports = controllers;



