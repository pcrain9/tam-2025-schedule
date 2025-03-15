import { footerLinks } from "~/constants";
import OutboundLink from "../outbound-link";

export default function Footer() {
  return (
    <footer className="flex justify-center align-center flex-wrap gap-8 bg-[#CDB245] h-[100px] sm:h-[150px] mt-8 p-6">
      {footerLinks.map((link, index) => (
        <OutboundLink key={index} link={link} index={index} />
      ))}
    </footer>
  );
}
