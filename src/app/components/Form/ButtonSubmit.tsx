import { ComponentProps, ReactNode } from 'react';

type ButtonSubmitProps = ComponentProps<'button'> & {
  children: string | ReactNode,
  login?: boolean,
}

export function ButtonSubmit({children, login, ...props }:ButtonSubmitProps) {
  return (
    <button
      data-login={login}
      className="w-full data-[login=false]:lg:w-40 inline-flex justify-center items-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 focus:outline-none disabled:bg-emerald-600 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button> 
  )
}