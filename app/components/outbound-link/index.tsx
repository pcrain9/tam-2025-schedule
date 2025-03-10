export default function OutboundLink({
  link,
}: {
  link: { title: string; href: string };
}) {
  return (
    <a href={link.href} className="font-bold text-[#263F8A] hover:underline">
      {link.title}
    </a>
  );
}
