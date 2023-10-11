import { ComponentProps, ChangeEvent } from 'react';

type InputProps = ComponentProps<'input'> & {
  type: string,
  id?: string,
  label?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export function Input({id, label, type, onChange, ...props }:InputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-md text-zinc-800/40 leading-10">
        {label}
      </label>
      <input 
        id={id}
        type={type}
        onChange={onChange}
        className="w-full bg-gray-200 data-[typeDate=true]:text-gray-400  text-sm text-gray-900 rounded-md py-2 px-4 border-0 outline-none "
        {...props}
      />
    </div>
  )
}