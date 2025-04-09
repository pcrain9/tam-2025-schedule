import type { Route } from "./+types/home";
import Hero from "~/components/hero";
// import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Notifications from "~/components/notifications";
import { notifications } from "~/constants";
import Welcome from "./welcome";
import { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TAM 2025 Schedule" },
    { name: "description", content: "View the TAM 2025 schedule here!" },
  ];
}

export default function Home() {
  // Announcement effect
  useEffect(() => {
    alert(
      "Wednesday at 11am - Join us at the Texas State Capitol to hear TAM's 50th Anniversary Proclamation read."
    );
  }, []);
  return (
    <div className="flex flex-col gap-4 h-screen">
      <Hero />
      {notifications.map((notification, index) => (
        <Notifications key={index} notification={notification} />
      ))}
      <NavBar />
      <Outlet />
      <div style={{ flexGrow: 1 }} />
      <Footer />
    </div>
  );
}
