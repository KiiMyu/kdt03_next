import React from 'react';
import ErrorButton from './ErrorButton';

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return { name : '파파파파스타'};
}

export default async function Page() {

    const restaurant = await getData();

    return (
        <div className="flex flex-col w-full justify-start p-5">
            <h1 className="text-3xl font-bold m-5 p-5">
                오늘의 맛집 추천
            </h1>
            <div className="flex flex-col w-3xl border rounded-sm bg-gray-200 text-gray-900 p-5 m-5">
                <h2 className="text-xl font-bold">파스타 맛집</h2>
                <p>
                    {restaurant.name}
                </p>
            </div>
            <ErrorButton />
        </div>
    );
}
