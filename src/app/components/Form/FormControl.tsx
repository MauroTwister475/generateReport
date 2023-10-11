import { ComponentProps, ReactNode } from 'react';

type FormControlProps = ComponentProps<'form'> & {
  children: ReactNode,
}

export function FormControl({ children }: FormControlProps) {
  return (
    <div className="w-full flex gap-2 items-center justify-center">
      {children}
    </div>
  )
}