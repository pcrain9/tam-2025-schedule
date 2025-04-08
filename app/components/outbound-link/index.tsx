export default function OutboundLink({
  link,
  index,
  showDivider = true,
}: {
  link: { title: string; href: string };
  index: number;
  showDivider?: boolean;
}) {
  return (
    <>
      {index === 0 && showDivider && <span className="hidden sm:block">|</span>}
      <a
        href={link.href}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold hover:underline mr-0 sm:mr-4 font-poppins"
      >
        {link.title}
      </a>
      {showDivider && <span className="hidden sm:block">|</span>}
    </>
  );
}
