import { ReactNode } from "react";
import { MenuLateral } from "@/app/components/Menu-Lateral";
import { ContryContextProvider } from "@/app/hooks/useContrySelect";
import { SelectedContryContextProvider } from "@/app/hooks/useSelectedContry";
import { FormDataProvider } from "@/app/hooks/useFormDataContext";

interface PagesLayoutProps {
  children: ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <ContryContextProvider>
      <SelectedContryContextProvider>
        <FormDataProvider>
          <MenuLateral />
          {children}
        </FormDataProvider>
      </SelectedContryContextProvider>
    </ContryContextProvider>
  );
}
