const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
   "@": require("path").resolve(__dirname, "src"), // 🔥 Metro 번들러 alias 설정
};

module.exports = withNativeWind(config, { input: "./app/global.css" });
