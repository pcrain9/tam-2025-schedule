import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TAM 2025 Schedule" },
    { name: "description", content: "View the TAM 2025 schedule here!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
