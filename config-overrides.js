module.exports = function override(config, env) {
  config = new SassRuleRewirer()
    .withRuleOptions({...})
    .withLoaderOptions({...})
    .rewire(config, env);
  return config;
}