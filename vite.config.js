import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ ensures correct asset paths for deployment
  server: {
    open: true, // ✅ this will automatically open your default browser (Chrome if it's your default)
  },
});
