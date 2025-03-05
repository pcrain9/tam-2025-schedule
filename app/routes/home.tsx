import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import NavBar from "~/components/nav-bar";
import Hero from "~/components/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TAM 2025 Schedule" },
    { name: "description", content: "View the TAM 2025 schedule here!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <NavBar />
      <Welcome />
    </div>
  );
}
