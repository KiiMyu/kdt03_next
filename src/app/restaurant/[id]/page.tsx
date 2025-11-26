import React from 'react';
import restaurantData from '@/data/부산맛집.json'
import Link from 'next/link';
import Image from 'next/image';
import { Restaurant } from '@/Type/Restaurant';
import { notFound } from 'next/navigation';

interface RestaurantDetailProps {
    params: Promise<{
        id: string;
    }>;
}
export async function generateStaticParams() { // <- 이걸 쓰면 SSG를 미리 생성 가능. 미리 생성하는 페이지라 반응이 더 빠름.
    const restaurant: /*typeof restaurantData*/ Restaurant[] = restaurantData;
    return restaurant.map((restaurantItem) => ({
        id: String(restaurantItem.UC_SEQ),
    }));
}

export default async function RestaurantDetail({ params }: RestaurantDetailProps) {
    const { id } = await params;
    const restaurant = restaurantData.find(item => item.UC_SEQ === Number(id));
    //console.log(id)

    // if(!restaurant) { // 데이터가 없으면, notfound 로 연결.
    //     notFound();
    // }

    return (
        <div>
            <div className="text-center p-5 m-5 text-2xl font-bold">{restaurant?.MAIN_TITLE}</div>
            <div className="flex flex-row justify-between">
                {restaurant?.MAIN_IMG_NORMAL ?
                    <Image src={restaurant?.MAIN_IMG_NORMAL ? restaurant.MAIN_IMG_NORMAL : '/react.svg'} width={400} height={400}
                        alt="Image" sizes="(max-width: 600px) 200px, 400px" /> : <div className="w-600 h-400"></div>
                }
                <div className="flex flex-col items-center">
                    <table className="vertical-headings p-2 m-2">
                        <tbody>
                            <tr>
                                <th className="w-2/10 p-4 border-b-2">주소</th>
                                <td className="border-b-2">
                                    <div className="text-center">{restaurant?.ADDR1}</div>
                                </td>
                            </tr>
                            <tr>
                                <th className="w-2/10 p-4 border-b-2">전화번호</th>
                                <td className="border-b-2">
                                    <div className="text-center">{restaurant?.CNTCT_TEL}</div>
                                </td>
                            </tr>
                            <tr>
                                <th className="w-2/10 p-4 border-b-2">영업시간</th>
                                <td className="border-b-2">
                                    <div className="text-center">{restaurant?.USAGE_DAY_WEEK_AND_TIME}</div>
                                </td>
                            </tr>
                            <tr>
                                <th className="w-2/10 p-4 border-b-2">주 메뉴</th>
                                <td className="border-b-2">
                                    <div className="text-center">{restaurant?.RPRSNTV_MENU}</div>
                                </td>
                            </tr>
                            <tr>
                                <th className="w-2/10 p-4 border-b-2">상세설명</th>
                                <td className="border-b-2">
                                    <div>{restaurant?.ITEMCNTNTS}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex flex-row">
                        <Link href="/restaurant" className="rounded-xl bg-blue-500 text-white px-5 py-2 m-5">목록으로</Link>
                        <a href={`https://map.kakao.com/link/to/${restaurant?.MAIN_TITLE},${restaurant?.LAT},${restaurant?.LNG}`}
                            className="hover:cursor-pointer bg-amber-300 px-5 py-2 m-5 rounded-xl">카카오 지도보기</a>
                    </div>
                </div>
            </div>
        </div>
    );
}