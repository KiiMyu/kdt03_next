'use client'

import RestaurantCard from '@/components/RestaurantCard';
import BusanData from '@/data/부산맛집.json'
import React from 'react';
import { Restaurant } from '@/Type/Restaurant';

export default function RestaurantPage() {

    // const getBusanRestData = async () => {
    //     const RestData = await fetch(BusanData)
    //     const RestJsonData = await 
    // }

    // async function generateStaticParams <- 이걸 쓰면 데이터 넘길 수 있음.

    return (
        <div className="h-full flex flex-col justify-start items-between">
            <h1 className="text-3xl flex justify-center m-5 p-5">부산 맛집 목록</h1>
            <div className="grid grid-cols-4 scroll-auto gap-3 overflow-y-auto">
                {
                    BusanData.map((item : Restaurant, index) => <RestaurantCard key={`RestCard`+index} data={item}/>)
                }
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>
        </div>
    );
}