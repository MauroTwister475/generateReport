
export type MemberProps = {
  id?: string,
  nome: string,
  iso_code?: string,
  status?: string,
  joined?: string
}

export interface USer {
  id?: string,
  email?: string,
  nome: string,
  senha: string
}

export const countries: MemberProps[] = [
  { nome: "" },
];
