import { Header } from "@/app/components/Header";
import { TableData } from "./TableData";

export default function SelecteContries() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <Header /> */}
      <div className="w-full h-full flex flex-col  items-center pt-20">
        <div className="w-full lg:w-[50rem] xl:w-[50rem] flex items-center justify-between text-zinc-400 font-semibold px-10">
          <strong>País</strong>
          <strong>Selecionar</strong>
        </div>
        <TableData />
      </div>
    </div>
  );
}
