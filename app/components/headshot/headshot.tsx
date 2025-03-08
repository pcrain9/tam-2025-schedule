import speakerIcon from "../../assets/icons/speaker.png";
import institutionIcon from "../../assets/icons/bank.png";
export default function Headshot({
  speaker,
}: {
  speaker: { name: string; headshot: string; institution: string };
}) {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[200px] bg-[#CDB245]  px-4 pt-2 pb-4 shadow-md rounded">
      <img
        src={speaker.headshot}
        className="h-[120px] w-auto rounded shadow-xl"
      />
      <div className="flex items-center gap-2 min-h-[100px]">
        <img className="h-[20px] w-[20px]" src={speakerIcon} />
        <p>{speaker.name}</p>
      </div>
      <div className="flex items-center gap-2 min-h-[100px]">
        <img className="h-[20px] w-[20px]" src={institutionIcon} />
        <p>{speaker.institution}</p>
      </div>
    </div>
  );
}
