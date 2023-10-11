'use client';

import Link from "next/link";
import { ComponentProps, ReactNode } from 'react';
import { usePathname } from "next/navigation";

type LinkItemProps = ComponentProps<typeof Link> & {
  href: string,
  children: ReactNode,
}

export function LinkItem({href, children }: LinkItemProps) {
  const pathname = usePathname();
  const activeLink = pathname === href;

  return (
    <Link 
      href={href}
      data-activelink={activeLink}
      className='w-full h-12 px-4 flex items-center justify-center mx-auto data-[activelink=true]:bg-primary-blue_50 rounded-md'
    >
      {children}
    </Link>
  )
}
