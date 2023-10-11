import { CircleNotch } from "@phosphor-icons/react";

export function Loading() {
  return (
    <CircleNotch 
      size={18} 
      weight='bold' 
      className="text-white animate-spin" 
    />
  )
}