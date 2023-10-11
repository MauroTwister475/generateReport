"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface SelectedCountryData {
  selectedCountry: boolean;
  setSelectedCountry: (selected: boolean) => void;
}

const SelectedContryContext = createContext<SelectedCountryData>({} as SelectedCountryData);

interface SelectedContryContextProviderProps {
  children: ReactNode;
}

export function SelectedContryContextProvider({children,}: SelectedContryContextProviderProps) {
  const [selectedCountry, setSelectedCountry] = useState(false);

  return (
    <SelectedContryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </SelectedContryContext.Provider>
  );
}

export function useContrySelected() {
  return useContext(SelectedContryContext);
}
