import { Suspense } from "react";
import BusanFestival from "./BusanFestival";

export default function FestivalContentsPage() {

    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <BusanFestival />
        </Suspense>
    )
}