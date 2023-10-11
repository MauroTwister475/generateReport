import { ComponentProps, ChangeEvent } from 'react';

type SelectProps = ComponentProps<'select'> & {
  id?: string,
  label?: string,
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
}

export function Select({id, label, onChange, ...props }:SelectProps) {

  return (
      <div className="w-[28rem]">
        <label htmlFor={id} className="text-md text-zinc-800/40 leading-10">
        {label}
      </label>
      <select 
        id={id}
        onChange={onChange}
        className="w-full bg-gray-200 text-sm text-gray-900 rounded-md py-2 px-4 border-0 outline-none "
        {...props}
      >
        <option 
          disabled 
        >
          Selecione uma opção
        </option>
        <option>Com acompanhamento</option>
        <option>Com pronunciamento</option>
      </select>
    </div>
  )
}