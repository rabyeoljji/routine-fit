const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
   "@": require("path").resolve(__dirname, "src"), // 🔥 Metro 번들러 alias 설정
};

// SVG 파일을 Transformer에 연결
config.transformer.babelTransformerPath = require.resolve(
   "react-native-svg-transformer"
);

// SVG 파일을 import할 때 처리
config.resolver.assetExts = config.resolver.assetExts.filter(
   (ext) => ext !== "svg"
);
config.resolver.sourceExts.push("svg");

module.exports = withNativeWind(config, { input: "./app/global.css" });