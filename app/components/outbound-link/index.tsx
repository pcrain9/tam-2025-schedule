export default function OutboundLink({
  link,
  index,
}: {
  link: { title: string; href: string };
  index: number;
}) {
  return (
    <>
      {index === 0 && <p className="invisible sm:visible">|</p>}
      <a
        href={link.href}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold hover:underline mr-0 sm:mr-4 font-poppins"
      >
        {link.title}
      </a>
      <p className="invisible sm:visible">|</p>
    </>
  );
}
