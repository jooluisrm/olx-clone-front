import Link from "next/link";

const Custom404 = () => {
    return (
        <div>
            <h1>Página não encontrada</h1>

            <Link href={"/"}>Voltar para a HOME</Link>
        </div>
    );
}

export default Custom404;