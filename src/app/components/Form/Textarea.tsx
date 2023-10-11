import { ChangeEvent, ComponentProps } from 'react';

type TextareaProps = ComponentProps<'textarea'> & {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

export function Textarea({ onChange, ...props }:TextareaProps) {
  return (
    <textarea 
      onChange={onChange}
      className="w-full h-32 py-4 text-sm bg-gray-200 rounded-md border-0 outline-none resize-none px-4"
      {...props}
    >
    </textarea>
  )
}