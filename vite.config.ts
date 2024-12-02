import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/willy3087/cmexfront/",
  plugins: [react()],
  server: {
    open: true, // Adiciona esta linha para abrir o navegador automaticamente
  },
});
