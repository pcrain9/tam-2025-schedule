import type { Route } from "./+types/home";
import Hero from "~/components/hero";
import { Outlet } from "react-router";
import Footer from "~/components/footer/footer";
import Notifications from "~/components/notifications";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TAM 2025 Schedule" },
    { name: "description", content: "View the TAM 2025 schedule here!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Hero />
      <Notifications />
      {/* <NavBar /> */}
      <Outlet />
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
}
