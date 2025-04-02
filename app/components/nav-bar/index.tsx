import { Link, useLocation } from "react-router";

const activeLinkStyle = "border-b-4 border-blue-500";
const hoverLinkStyle = "hover:border-b-4 hover:border-blue-500";
const routes = [
  { title: "Home", path: "/" },
  { title: "Conference sponsors", path: "/conference-sponsors" },
];

export default function NavBar() {
  const location = useLocation();
  return (
    <nav className="p-4 bg-[#C9E3E9]">
      <ul className="flex gap-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              className={`${
                location.pathname === route.path ? activeLinkStyle : ""
              } pb-4 ${hoverLinkStyle}`}
              to={route.path}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
