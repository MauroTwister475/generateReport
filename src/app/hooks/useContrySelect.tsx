"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { MemberProps, countries } from "../utils/types";
import { api } from "../Api";

interface ContryContextata {
  selectedCountries: string[];
  members: MemberProps[];
  notSelectedCountries: MemberProps[];
  setSelectedCountries: (selectedContry: string[]) => void;
  setNotSelectedCountries: (selectedContry: MemberProps[]) => void;
  setMembers: (members: MemberProps[]) => void;
  handleCheckboxChange: (countryName: string) => void;
  getMembers: () => void;
}

const ContryContext = createContext<ContryContextata>({} as ContryContextata);

interface ContryContextProviderProps {
  children: ReactNode;
}

export function ContryContextProvider({
  children,
}: ContryContextProviderProps) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [members, setMembers] = useState<MemberProps[]>([
    { nome: ""},
  ]);
  const [notSelectedCountries, setNotSelectedCountries] = useState<MemberProps[]>([]);

  function handleCheckboxChange(countryName: string) {
    if (selectedCountries.includes(countryName)) {
      setSelectedCountries(
        selectedCountries.filter((name) => name !== countryName)
      );
    } else {
      setSelectedCountries([...selectedCountries, countryName]); //
      setNotSelectedCountries(
        members.filter((country) => !selectedCountries.includes(country.nome))
      );
    }
  }

  async function getMembers() {
    const response = await api.get('/showMembers');
    setMembers(response.data);
    console.log(members);
  }

  return (
    <ContryContext.Provider
      value={{
        selectedCountries,
        setSelectedCountries,
        handleCheckboxChange,
        notSelectedCountries,
        setNotSelectedCountries,
        setMembers,
        members,
        getMembers,
      }}
    >
      {children}
    </ContryContext.Provider>
  );
}

export function useContryContext() {
  return useContext(ContryContext);
}
