'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkItem } from "./LinkItem";
import { SignOut, Plus, ListChecks  } from "@phosphor-icons/react"

import avatar from "../../../../public/avatar.jpg";
import settingsIcon from "../../../../public/settings.svg";

export function MenuLateral() {
  const path = usePathname();

  return (
    <div 
      data-path={path} 
      className="data-[path='/print']:hidden w-20 z-10 h-full py-4 bg-white flex flex-col items-center justify-between"
    >
      <div className="h-full flex items-center flex-col gap-12">
        <Image 
          src={avatar} 
          alt="avatar" 
          className="w-10 h-10 rounded-full border" 
        />
        <div className="w-full flex flex-col items-center gap-6">
          <LinkItem href='/new'>
            <Plus 
              size={20}
              weight='bold'
              className="w-6 text-primary-blue" 
            />
          </LinkItem>
          <LinkItem href='/selectcontry'>
            <ListChecks  
              size={20}
              weight='bold'
              className="w-6 text-primary-blue" 
            />
          </LinkItem>
          <LinkItem href='/settings'>
            <Image 
              src={settingsIcon} 
              alt='settings'
              className="w-6" 
            />
          </LinkItem>
        </div>
      </div>
      <LinkItem href="/">
        <SignOut 
          size={20} 
          weight='bold'
          className="w-8 text-primary-blue" 
        />
      </LinkItem>
    </div>
  );
}
