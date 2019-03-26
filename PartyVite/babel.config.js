module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv', "module:metro-react-native-babel-preset"],
  };
};
