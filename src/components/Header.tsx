import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-white h-[60px] border-b-[1px] border-[#ccc]">
            <div className="max-w-[1000px] mx-auto flex">
                <div className="flex-1 flex items-center h-[60px]">
                    <Link href={"/"}>
                        <span className="text-red-600 text-[27px] font-bold">O</span>
                        <span className="text-green-600 text-[27px] font-bold">L</span>
                        <span className="text-blue-600 text-[27px] font-bold">X</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}