import { isLogged } from "@/helpers/AuthHandler";
import Link from "next/link";

export const Header = () => {

    let logged = isLogged();

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
                        {logged &&
                            <>
                                <li>
                                    <Link href={"/my-account"} className="text-[14px]">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link href={"/logout"} className="text-[14px]">Sair</Link>
                                </li>
                                <li>
                                    <Link href={"/post-an-ad"} className="text-[14px] bg-[#ff8100] text-white py-[5px] px-[10px] rounded hover:bg-[#e57706]">Poste um anúncio</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link href={"/signin"} className="text-[14px]">Login</Link>
                                </li>
                                <li>
                                    <Link href={"/signup"} className="text-[14px]">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link href={"/signin"} className="text-[14px] bg-[#ff8100] text-white py-[5px] px-[10px] rounded hover:bg-[#e57706]">Poste um anúncio</Link>
                                </li>
                            </>
                        }


                    </ul>
                </nav>
            </div>
        </header>
    );
}