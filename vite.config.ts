import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteAliases } from "./node_modules/vite-aliases";
// import {
//   createStyleImportPlugin,
//   ElementPlusResolve,
// } from "vite-plugin-style-import";
import VitePluginElementPlus from "vite-plugin-element-plus";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      ViteAliases(),
      VitePluginElementPlus({
        format: mode === "development" ? "esm" : "cjs",
      }),
      // createStyleImportPlugin({
      //   resolves: [ElementPlusResolve()],
      //   libs: [
      //     {
      //       libraryName: "element-plus",
      //       esModule: true,
      //       resolveStyle: (name) => {
      //         return `element-plus/lib/theme-chalk/${name}.css`;
      //       },
      //       ensureStyleFile: true,
      //     },
      //   ],
      // }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".json"],
    },
    server: {
      port: 8086,
      hmr: {
        host: "localhost",
        port: 8086,
      },
      open: "/index.html",
    },
  };
});
