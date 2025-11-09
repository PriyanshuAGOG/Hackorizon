import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel will build from /client and expects output in /client/dist
export default defineConfig({
  plugins: [react()],
  build: { outDir: "dist", emptyOutDir: true }
});
