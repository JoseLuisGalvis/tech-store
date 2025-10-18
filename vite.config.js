import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tech-store/", // Reemplaza con el nombre exacto de tu repo
});
