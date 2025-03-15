export default function OutboundLink({
  link,
  index,
}: {
  link: { title: string; href: string };
  index: number;
}) {
  return (
    <>
      {index === 0 && <p>|</p>}
      <a
        href={link.href}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold hover:underline mr-4"
      >
        {link.title}
      </a>
      <p>|</p>
    </>
  );
}
