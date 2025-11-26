import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h2>링크오류</h2>
            <p>해당하는 파일이 존재하지 않습니다.</p>
            <Link href="/app01" className="bg-blue-400 rounded-2xl border-black p-5 text-white">맛집</Link>
        </div>
    );
}