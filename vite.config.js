import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/maison-veterinaire-atlas/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (id.includes("framer-motion")) {
            return "motion-vendor";
          }

          return undefined;
        },
      },
    },
  },
});
