"use client"

import { FormEvent, useState } from "react";
import useApi from "@/helpers/OlxAPI";
import { doLogin } from "@/helpers/AuthHandler";

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
    }

    return (
        <div className="max-w-[1000px] m-auto">

            <h1 className="text-[27px] font-bold">Login</h1>

            <div>
                {error &&
                    <div className="my-[10px] bg-[#FFCACA] text-black border-[2px] border-[#FF0000] p-[10px]">
                        {error}
                    </div>
                }
                <form onSubmit={handleSubmit} className="bg-white rounded p-[10px] shadow-md">
                    <label htmlFor="email" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]">E-mail</div>
                        <div className="flex-[1]">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={disable}
                                type="email"
                                id="email"
                                className="w-full text-[14px] p-[5px] border rounded outline-none focus:border-[#333] focus:text-[#333] transition-all"
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="senha" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]">Senha</div>
                        <div className="flex-[1]">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={disable}
                                type="password"
                                id="senha"
                                className="w-full text-[14px] p-[5px] border rounded outline-none focus:border-[#333] focus:text-[#333] transition-all"
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor="lembrarsenha" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]">Lembrar senha</div>
                        <div className="flex-[1]">
                            <input
                                checked={rememberPassword}
                                onChange={() => setRememberPassword(!rememberPassword)}
                                disabled={disable}
                                type="checkbox"
                                id="lembrarsenha"
                                className="text-[14px] p-[5px] border rounded outline-none focus:border-[#333] focus:text-[#333] transition-all"
                            />
                        </div>
                    </label>
                    <label htmlFor="" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]"></div>
                        <div className="flex-[1]">
                            <button disabled={disable} className="bg-[#0089ff] border-0 outline-none py-[5px] px-[10px] rounded text-white text-[15px] cursor-pointer hover:bg-[#006fce] transition-all">Fazer login</button>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Page;