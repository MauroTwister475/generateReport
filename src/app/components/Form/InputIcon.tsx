import { ChangeEvent, ComponentProps, ReactNode } from 'react';

type InputProps = ComponentProps<'input'> & {
  type: string,
  icon: ReactNode,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export function InputIcon({icon, type, onChange, ...props}:InputProps) {
  return (
    <div className="w-full bg-gray-200 flex items-center rounded-md justify-center">
      <span className="w-8 flex items-center justify-center text-gray-900 ml-1">
        {icon}
      </span>
      <input 
        type={type}
        onChange={onChange}
        className="w-full text-sm bg-gray-200 text-gray-900 py-3 rounded-md outline-none"
        {...props}
      />
    </div>
  )
}