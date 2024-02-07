import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
});
