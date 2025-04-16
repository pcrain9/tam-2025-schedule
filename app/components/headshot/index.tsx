import speakerIcon from "../../assets/icons/speaker.png";
import institutionIcon from "../../assets/icons/bank.png";
export default function Headshot({
  speaker,
}: {
  speaker: { name: string; headshot: string; institution: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center sm:justify-start gap-4 max-w-[200px] bg-[#CDB245]  px-4 pt-2 pb-4 shadow-md rounded">
      <p>note: headshots were removed</p>
      <div className="flex items-center gap-4 min-h-[100px] w-[155px]">
        <img className="h-[20px] w-[20px]" src={speakerIcon} />
        <p className="font-poppins">{speaker.name}</p>
      </div>
      <div className="flex items-center gap-4 min-h-[100px] w-[155px]">
        <img
          className="h-[20px] w-[20px]"
          src={institutionIcon}
          alt={speaker.name}
        />
        <p className="font-poppins">{speaker.institution}</p>
      </div>
    </div>
  );
}
