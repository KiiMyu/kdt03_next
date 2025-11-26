import React from 'react';
import Link from 'next/link';

export default function App02Layout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="flex h-full flex-col justify-between">
            <aside className="flex flex-col w-full bg-gray-200 items-center">
                <h1 className="flex flex-col items-center text-xl font-bold m-2">맛집 카테고리</h1>
                <nav className="w-8/10">
                    <ul className="m-3 flex justify-between">
                        <li className="p-1 hover:font-bold hover:cursor-pointer"><Link href="/app02/junggu">중구</Link></li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer">동구</li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer">서구</li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer">북구</li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer">해운대구</li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer">동래구</li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer">부산진구</li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}