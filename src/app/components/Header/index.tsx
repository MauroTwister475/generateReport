import Image from "next/image";
import iconLogo from "../../../../public/report.svg";

export function Header() {
  return (
    <header className="w-full pl-24 top-0 fixed h-32 max-h-32 bg-white flex items-center justify-between px-8">
      <h1 className="font-medium text-lg text-gray-500">
        Crie relatórios de forma
        <br />
        rápida e eficiênte
      </h1>
      <Image 
        src={iconLogo}
        alt="icon de relatory" 
        className="w-20"
      />
    </header>
  );
}
