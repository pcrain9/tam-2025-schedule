import tamLogo from "app/assets/icons/tam-logo-full.png";

export default function Hero() {
  return (
    <div className="flex items-center gap-4 p-4 sm:p-0">
      <img className="size-[120px] sm:size-[360px]" src={tamLogo} />
      <h1 className="text-xl sm:text-8xl font-bold text-[#263F8A] font-goudyBookletter">
        TAM 2025 Full Schedule
      </h1>
    </div>
  );
}
