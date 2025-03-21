export default function OutboundLink({
  link,
  index,
}: {
  link: { title: string; href: string };
  index: number;
}) {
  return (
    <>
      {index === 0 && <span className="hidden sm:block">|</span>}
      <a
        href={link.href}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold hover:underline mr-0 sm:mr-4 font-poppins"
      >
        {link.title}
      </a>
      <span className="hidden sm:block">|</span>
    </>
  );
}
