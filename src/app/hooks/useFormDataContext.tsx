"use client";
import { createContext, useContext, ReactNode, useState } from "react";

type FormData = {
  titulo: string,
  tema: string,
  decisao: string,
  participacao: string,
  ponto: string,
  referencia: string,
  atribuicao: string,
  documento: string,
  comentario: string,
  Contextualizacao: string,
  data: string,
}

interface FormDataContextProps {
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextProps>(
  {} as FormDataContextProps);

interface FormDataProviderProps {
  children: ReactNode;
}

export function FormDataProvider({children,}: FormDataProviderProps) {
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    tema: '',
    ponto: '',
    participacao: 'Com acompanhamento',
    referencia: '',
    atribuicao: '',
    documento: '',
    comentario: '',
    Contextualizacao: '',
    decisao: '',
    data: ''
  });

  return (
    <FormDataContext.Provider  value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
