const Page = () => {
    return (
        <div className="max-w-[1000px] m-auto">

            <h1 className="text-[27px] font-bold">Login</h1>

            <div>
                <form action="" className="bg-white rounded p-[10px] shadow-md">
                    <label htmlFor="email" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]">E-mail</div>
                        <div className="flex-[1]">
                            <input type="email" name="" id="" className="w-full text-[14px] p-[5px] border rounded outline-none focus:border-[#333] focus:text-[#333] transition-all"/>
                        </div>
                    </label>
                    <label htmlFor="email" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]">Senha</div>
                        <div className="flex-[1]">
                            <input type="password" name="" id="" className="w-full text-[14px] p-[5px] border rounded outline-none focus:border-[#333] focus:text-[#333] transition-all"/>
                        </div>
                    </label>
                    <label htmlFor="" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]">Lembrar senha</div>
                        <div className="flex-[1]">
                            <input type="checkbox" name="" id="" className="text-[14px] p-[5px] border rounded outline-none focus:border-[#333] focus:text-[#333] transition-all"/>
                        </div>
                    </label>
                    <label htmlFor="email" className="flex items-center p-[10px] max-w-[500px]">
                        <div className="w-[200px] text-right pr-5 font-bold text-[14px]"></div>
                        <div className="flex-[1]">
                            <button className="bg-[#0089ff] border-0 outline-none py-[5px] px-[10px] rounded text-white text-[15px] cursor-pointer hover:bg-[#006fce] transition-all">Fazer login</button>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Page;