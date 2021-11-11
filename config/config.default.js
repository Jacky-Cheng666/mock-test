/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636533615225_8595';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      useSession: true,
      enable: false,
      cookieName: "csrfToken",
      sessionName: "csrfToken"
    },
  };
  config.cors = {
    origin: "*",
    exposeHeaders: "WWW-Authenticate,Server-Authorization,Date",
    maxAge: 100,
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    allowHeaders: "Content-Type,Authorization,Accept,X-Custom-Header,anonymous"
  };
  return {
    ...config,
    ...userConfig,
  };
};
