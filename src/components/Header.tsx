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
                <nav className="py-[10px]">
                    <ul className="flex items-center h-[40px] gap-[40px] font-bold">
                        <li className="">
                            <Link href={""} className="text-[14px]">Login</Link>
                        </li>
                        <li>
                            <Link href={""} className="text-[14px]">Cadastrar</Link>
                        </li>
                        <li>
                            <Link href={""} className="text-[14px] bg-[#ff8100] text-white py-[5px] px-[10px] rounded hover:bg-[#e57706]">Poste um anúncio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}