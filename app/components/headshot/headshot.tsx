import speakerIcon from "../../assets/icons/speaker.png";
export default function Headshot({
  speaker,
}: {
  speaker: { name: string; headshot: string };
}) {
  return (
    <div className="flex flex-col gap-2 max-w-[120px]">
      <img src={speaker.headshot} className="h-[84px] w-[64px] rounded" />
      <div className="flex items-center">
        <img className="h-[20px] w-[20px]" src={speakerIcon} />
        <p className="text-wrap">{speaker.name}</p>
      </div>
    </div>
  );
}
