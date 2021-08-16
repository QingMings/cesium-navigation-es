import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    emptyOutDir: true,
    optimizeDeps: {
      exclude: ["cesium"],
    },
    lib: {
      formats: ["es", "umd"],
      entry: resolve(__dirname, "./lib/viewerCesiumNavigationMixin.js"),
      name: "cesium-navigation-es",
    },
    rollupOptions: {
      external: ["cesium"],
    },
  },
});
