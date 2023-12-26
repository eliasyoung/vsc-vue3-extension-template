import { defineConfig } from "vite";

// module.exports = defineConfig({});

export default defineConfig({
  build: {
    lib: {
      entry: "./src/vue-app/index.ts",
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