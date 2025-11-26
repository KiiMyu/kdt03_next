import React from 'react';

export default function JungguPage() {
    return (
        <div className="flex flex-col w-full justify-start p-5">
            <h1 className="text-3xl font-bold m-5 p-5">
                중구 맛집 추천
            </h1>
            <div className="flex flex-col w-3xl border rounded-sm bg-gray-200 text-gray-900 p-5">
                <h2 className="text-xl font-bold">중구 맛집</h2>
                <p>
                    중국집이 맛있는 집!
                </p>
            </div>
        </div>
    );
}