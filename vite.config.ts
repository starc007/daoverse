import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const aliases = {
  // "@img": path.resolve(__dirname, "src/img"),
  "@routes": path.resolve(__dirname, "src/routes"),
  "@assets": path.resolve(__dirname, "src/assets"),
  "@components": path.resolve(__dirname, "src/components"),
  // "@staticRoutes": path.resolve(__dirname, "src/static-routes"),
  // "@lazyRoutes": path.resolve(__dirname, "src/lazy-routes"),
  // "@layouts": path.resolve(__dirname, "src/layouts"),
  "@store": path.resolve(__dirname, "src/store"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
