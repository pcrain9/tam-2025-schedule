import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "./routes/home.tsx", [
    index("./routes/welcome.tsx"),
    route("speaker-bios", "./routes/speaker-bios.tsx"),
  ]),
] satisfies RouteConfig;
