import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://kg-mark-tech.vercel.app", // Elimina la barra final
  base: "/agency-template", // Asegúrate de que esta sea la ruta base correcta
});