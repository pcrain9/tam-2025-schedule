import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "./routes/home.tsx", [
    index("./routes/welcome.tsx"),
    route("conference-sponsors", "./routes/conference-sponsors.tsx"),
  ]),
] satisfies RouteConfig;
