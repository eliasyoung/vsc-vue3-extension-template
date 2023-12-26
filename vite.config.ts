import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// module.exports = defineConfig({});

export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/webviewview-app/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vscode"],
    },
    emptyOutDir: false,
    outDir: "dist/compiled",
  },
});
