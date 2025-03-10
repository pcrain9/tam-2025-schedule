import { footerLinks } from "~/constants";
import OutboundLink from "../outbound-link";

export default function Footer() {
  return (
    <footer className="flex gap-8 bg-[#8194B7] h-[100px] sm:h-[150px] mt-8 p-6">
      {footerLinks.map((link) => (
        <OutboundLink link={link} />
      ))}
    </footer>
  );
}
