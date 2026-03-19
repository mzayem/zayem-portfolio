// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress", ext: ".br" }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-core": ["three"],
          "react-three": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          gsap: ["gsap"],
          physics: ["@react-three/rapier"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
