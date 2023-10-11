import { ReactNode } from "react";

interface DataContentProps {
  children: ReactNode,
  content?: string,
}

export function DataContent({ children, content }: DataContentProps) {
  return (
    <div className="mb-6 w-full text-justify">
      <strong>{content}: </strong>
      {children}
    </div>
  );
}
