import type { Route } from "./+types/home";
import NavBar from "~/components/nav-bar";
import Hero from "~/components/hero";
import { Outlet } from "react-router";

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
      <Outlet />
    </div>
  );
}
