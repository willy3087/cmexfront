import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cmexfront/", // Substitua 'nome-do-repositorio' pelo nome do seu repositório
  plugins: [react()],
  server: {
    open: true,
  },
});
