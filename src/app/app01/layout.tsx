import React from 'react';
import Link from 'next/link';

export default function App01Layout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="flex h-full justify-start">
            <aside className="w-65 bg-gray-200">
                <h1 className="text-xl font-bold m-2">맛집 카테고리</h1>
                <nav>
                    <ul className="m-3">
                        <li className="p-1 hover:font-bold hover:cursor-pointer"><Link href="/app01/junggu">중구</Link></li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer"><Link href="/app01/donggu">동구</Link></li>
                        <li className="p-1 hover:font-bold hover:cursor-pointer"><Link href="/app01/seogu">서구</Link></li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}