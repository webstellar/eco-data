import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

//import { visionTool } from "@sanity/vision";

const config = defineConfig({
  name: "default",
  title: "Eco Data",
  projectId: "e6ghx5sn",
  dataset: "production",
  apiVersion: "2023-08-19",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
