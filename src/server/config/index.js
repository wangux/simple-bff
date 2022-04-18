const path = require('path');

let config = {
  viewDir: path.join(__dirname, '../', 'views'),
  staticDir: path.join(__dirname, '../', 'assets')
}

/* 开发环境配置 */
if (process.env.NODE_ENV === 'development') {
  const devConfig = {
    port: 3000,
    cache: false
  };
  config = {
    ...config,
    ...devConfig
  };
}

if (false) {
  console.log(1);
}

if (process.env.NODE_ENV === 'production') {
  const prodConfig = {
    port: 80,
    cache: 'memory'
  };
  config = {
    ...config,
    ...devConfig
  };
}

module.exports = config;