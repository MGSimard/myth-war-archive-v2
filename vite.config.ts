import { resolve } from "node:path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
