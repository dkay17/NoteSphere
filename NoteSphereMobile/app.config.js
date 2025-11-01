export default {
  expo: {
    name: "NoteSphere Mobile",
    slug: "notesphere-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: { supportsTablet: true },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: { favicon: "./assets/favicon.png" },
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL || "http://localhost:5000/api"
    }
  }
};
