"use client";
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react";
import { Form } from "@/app/components/Form";
import { api } from "@/app/Api";
import { Loading } from "@/app/components/Loading";
import { CountriesTable } from "./CountriesTable";
import { SelecteCountriesLink } from "./SelecteCountriesLink";
import { useContryContext } from "@/app/hooks/useContrySelect";
import { useFormData } from "@/app/hooks/useFormDataContext";

export function CreateNewReport() {
  const { push } = useRouter()
  const { selectedCountries, notSelectedCountries } = useContryContext();
  const [isLoading, setIsLoading] = useState(false);
  const { formData, setFormData } = useFormData();

  const countries = {
    selected: selectedCountries,
    notselected: notSelectedCountries,
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({...prevValues,[name]: value,}));
  };

  async function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      if(selectedCountries.length !== 0) {
        await api.post('/createReport', formData);

        setIsLoading(true);
        push("/print");
      } else {
        alert("Selecione no minimo um país");
      }
    } catch (error) {
      console.log("Erro: " + error);
    }
  }

  return (
    <form
      onSubmit={onHandleSubmit}
      className="w-full lg:w-[60rem] md:w-[50rem] h-auto flex items-center justify-center flex-col gap-4 rounded-lg bg-white p-8 align-middle shadow-xl"
    >
      <div className="w-full text-left text-xl font-semibold leading-6 text-gray-900">
        <h3>Criar relatório</h3>
      </div>
      <Form.FormControl>
        <Form.Input
          type="text"
          name="tema"
          label="Tema"
          value={formData.tema}
          onChange={handleChange}
        />
        <Form.Input
          type="text"
          name="titulo"
          label="Título"
          value={formData.titulo}
          onChange={handleChange}
        />
        <Form.Input
          type="text"
          name="ponto"
          label="Ponto"
          value={formData.ponto}
          onChange={handleChange}
        />
      </Form.FormControl>
      <Form.FormControl>
        <Form.Input
          type="text"
          name="Contextualizacao"
          label="Contextualização"
          value={formData.Contextualizacao}
          onChange={handleChange}
        />
        <Form.Input
          type="text"
          name="referencia"
          label="Referência"
          value={formData.referencia}
          onChange={handleChange}
        />
        <Form.Input
          type="text"
          label="Atribuição"
          name="atribuicao"
          value={formData.atribuicao}
          onChange={handleChange}
        />
      </Form.FormControl>
      <Form.FormControl>
        <Form.Input
          type="text"
          name="decisao"
          label="Decisão"
          value={formData.decisao}
          onChange={handleChange}
        />
        <Form.Input
          type="text"
          name="documento"
          label="Documento"
          value={formData.documento}
          onChange={handleChange}
        />
        <Form.Input
          type="date"
          label="Data"
          name="data"
          value={formData.data}
          onChange={handleChange}
        />
      </Form.FormControl>
      <div className="w-full flex justify-center items-end">
        <Form.Select 
          id="select"
          name='participacao'
          value={formData.participacao}
          label="Participação"
          onChange={handleChange}
        />
        <SelecteCountriesLink />
      </div>
      <CountriesTable />
      <Form.Textarea
        name="comentario"
        placeholder="Deixe seu comentário"
        value={formData.comentario}
        onChange={handleChange}
      />
      <div className="w-full flex justify-center lg:justify-end mt-4">
        <Form.ButtonSubmit 
          type="submit" 
          disabled={isLoading}
          login={false}
        >
          {isLoading ? <Loading /> : "Criar"}
        </Form.ButtonSubmit>
      </div>
    </form>
  );
}