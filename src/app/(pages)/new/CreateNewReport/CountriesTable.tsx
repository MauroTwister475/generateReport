"use client";
import { useContryContext } from "@/app/hooks/useContrySelect";
import { useContrySelected } from "@/app/hooks/useSelectedContry";

export function CountriesTable() {
  const { selectedCountries, } = useContryContext();
  const { selectedCountry } = useContrySelected();
  const [...countries] = selectedCountries;

  return (
    <>
      {
        selectedCountry ?
          <div className="w-full h-16 bg-gray-200 py-3 rounded-md flex gap-2 flex-wrap px-2">
            {countries.sort().map((country) => (
              <span
                key={country}
                className="text-zinc-500 text-sm"
              >
                {country},
              </span>
            ))}
          </div>
          :
          <TextUnselectedContry />
      }
    </>
  );
}

function TextUnselectedContry() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center h-16 bg-gray-200 py-4 rounded-md px-2">
      <span className="text-md text-zinc-400">
        Nenhum pais selecionado ainda.
      </span>
    </div>
  )
}
