'use client' // 유저용은 클라이언트로 지정해줘야 됨.

import Link from 'next/link';
import { useAtomValue } from 'jotai';
import { loginAtom } from '@/atoms/loginAtom';

interface PageMapItem {
  name: string;
  url: string;
  isHide?: boolean;
}

interface HeaderProps {
  pageMap: PageMapItem[] | null;
}

export default function Header({ pageMap }: HeaderProps) {

  const isLogin = useAtomValue<boolean>(loginAtom)

  return (
    <header className='bg-blue-600 text-white shadow-md'>
      <nav className='container h-16 mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-50'>KDT03</div>
        <ul className='flex space-x-4'>
          {
            isLogin && pageMap && pageMap.map((item, index) => {
              return !item["isHide"] ? <li key={"headerli" + index} className='hover:font-bold hover:cursor-pointer'>
                <Link href={item["url"]}>
                  {item["name"]}
                </Link>
              </li> : ""
            })
          }
        </ul>
      </nav>
    </header>
  )
}