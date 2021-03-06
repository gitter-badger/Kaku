define(function(require) {
  'use strict';

  var path = requireNode('path');

  var rootPath = __dirname;
  var configPath = path.join(rootPath, 'config');
  var APIConfigPath = path.join(configPath, 'api_config.production.json');

  // If users forget to change from *.sample.json to *.production.json,
  // requireNode will throw out error here, because if we don't have these
  // configs here, our program will be broken somehow. In this way, we should
  // make sure it does exist before running Kaku.
  return {
    API: requireNode(APIConfigPath)
  };
});
