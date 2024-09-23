import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteAliases } from "./node_modules/vite-aliases";
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      ViteAliases(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            ensureStyleFile: true,
          },
        ],
      }),
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
