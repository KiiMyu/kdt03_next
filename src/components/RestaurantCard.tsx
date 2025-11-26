import React from 'react'
import reactIcon from "@/assets/react.svg"
import Image from 'next/image'
import { Restaurant } from '@/Type/Restaurant'
import Link from 'next/link'


export interface RestaurantProps {
    data : Restaurant;

}
export default function RestaurantCard( {data} : RestaurantProps) {

    return (
        <Link href={`/restaurant/${data.UC_SEQ}`} 
            className="border rounded-2xl flex flex-col items-center">
            <Image src={data.MAIN_IMG_THUMB? data.MAIN_IMG_THUMB : reactIcon} 
            alt="restaurant Image." width={300} height={300}></Image>
            <div className="text-2xl p-5">{data.MAIN_TITLE}</div>
            <div className="p-2">{data.ITEMCNTNTS.slice(0, 15) + `...`}</div>
        </Link>
    )
}
