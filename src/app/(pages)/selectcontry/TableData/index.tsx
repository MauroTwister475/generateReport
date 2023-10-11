"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useContryContext } from "@/app/hooks/useContrySelect";
import { useContrySelected } from "@/app/hooks/useSelectedContry";

export function TableData() {
  const { push } = useRouter();
  const { selectedCountries, members, getMembers, setMembers, handleCheckboxChange } = useContryContext();
  const { setSelectedCountry } = useContrySelected();

  useEffect(() => {getMembers();}, []);

  function onConcludSeletion() {
    if(selectedCountries.length !== 0) { 
      setSelectedCountry(true);
      push("/new");
    }
  }

  return (
    <Suspense fallback={<h1>Carregando lista de países</h1>}>
      <table className="w-full h-auto max-h-[32rem] lg:w-[50rem] flex flex-col pb-2 px-4 ">
        <tbody className="flex flex-col gap-4 mt-4">
          {members.map((member) => (
            <tr
              key={member.nome}
              className="flex justify-between items-center p-6 rounded-md bg-white h-10 text-zinc-500 text-sm"
            >
              <td>{member.nome}</td>
              <td>
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={selectedCountries.includes(member.nome)}
                  onChange={() => handleCheckboxChange(member.nome)}// angola
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full lg:w-[50rem] flex justify-end mt-2 px-6 items-center">
        <button
          className="w-24 py-2 rounded-md bg-emerald-400 hover:bg-emerald-600 transition-colors text-white font-semibold"
          onClick={onConcludSeletion}
        >
          OK
        </button>
      </div>
    </Suspense>
  );
}