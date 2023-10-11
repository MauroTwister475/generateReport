"use client";
import { useFormData } from "@/app/hooks/useFormDataContext";
import { useContryContext } from "@/app/hooks/useContrySelect";
import { DataContent } from "./DataContent";

export default function Print() {
  const { formData } = useFormData();
  const { selectedCountries, notSelectedCountries } = useContryContext();

  return (
    <div className="w-[60rem] max-w-[700px] flex flex-col items-center justify-between px-10 mx-auto mt-10 bg-gra-200 ">
      <div className="w-full text-center mb-4">
        <h1 className="text-2xl font-bold mb-4">{formData.tema}</h1>
      </div>
      <section className="w-full h-full flex gap-2 flex-col">
        <DataContent content="Título">
          {formData.titulo}
        </DataContent>
        <DataContent content="Contextualização">
          {formData.Contextualizacao}
        </DataContent>
        <DataContent content="Ponto">
          {formData.ponto}
        </DataContent>
        <DataContent content="Atribuição">
          {formData.atribuicao}
        </DataContent>
        <DataContent content="Referência">
          {formData.referencia}
        </DataContent>
        <DataContent content="Documento">
          {formData.documento}
        </DataContent>
        <DataContent content="Participação">
          {formData.participacao}
        </DataContent>
        <DataContent content="Países a favor">
          {selectedCountries.sort().map((country) => (
            <span
              key={country}
              className="text-black text-md inline-block mr-2"
            >
              {country},
            </span>
          ))}
        </DataContent>

        <DataContent content="Países contra">
          {notSelectedCountries.sort().map((country) => (
            <span
              key={country.nome}
              className="text-black text-md inline-block mr-2"
            >
              {country.nome},
            </span>
          ))}
        </DataContent>
        <DataContent content="Decisão">{formData.decisao}</DataContent>
      </section>
      <footer className="w-full h-full flex flex-col justify-between py-8">
        <div className="w-full overflow-hidden text-justify">
          <span>{formData.comentario}</span>
        </div>
        <div className="flex items-center justify-end text-black text-md">
          <span>
            {new Date(formData.data).toLocaleString("pt-BR", {
              dateStyle: "full",
            }).replace(new Date(formData.data).toLocaleString("pt-BR", {
              dateStyle: "full",
            })[0], new Date(formData.data).toLocaleString("pt-BR", {
              dateStyle: "full",
            })[0].toLocaleUpperCase())}
          </span>
        </div>
      </footer>
    </div>
  );
}
