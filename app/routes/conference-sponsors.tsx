export default function ConferenceSponsors() {
  const sponsors = [
    {
      url: "https://res.cloudinary.com/demii3zjz/image/upload/v1743556380/sponsors-1_nstbic.png",
      alt: "sponsors-1",
    },
    {
      url: "https://res.cloudinary.com/demii3zjz/image/upload/v1743556457/sponsor-2_qz5lxq.png",
      alt: "sponsor-2",
    },
    {
      url: "https://res.cloudinary.com/demii3zjz/image/upload/v1743557156/sponsor-3_ogbmtf.png",
      alt: "sponsor-3",
    },
  ];
  return (
    <div className="flex flex-col gap-2 justify-center p-2 sm:p-0">
      {sponsors.map((sponsor, i) => (
        <img src={sponsor.url} alt={sponsor.alt} key={i} />
      ))}
    </div>
  );
}
