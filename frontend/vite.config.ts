import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Set your desired port number here
  },
  build: {
    rollupOptions: {
      input: "./index.html", // Ensure this points to the correct location
    },
  },
});
