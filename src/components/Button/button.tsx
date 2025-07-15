import { Link } from "react-router-dom";

type ButtonProps = {
    text: string;
    isMobile?: boolean; // prop opcional, para diferenciar entre mobile e desktop
}

export function Button({ text, isMobile = false }: ButtonProps) {
    return (
        <button 
            type="button"
            className=
                {isMobile ? 'w-full h-[42px] bg-fundo py-3 px-6 rounded-[48px] flex items-center justify-center text-primary text-md font-lato font-bold cursor-pointer hover:bg-secondary hover:text-tertiary transform transition duration-300' : 'w-[143px] h-[42px] bg-fundo py-3 px-6 rounded-[48px] flex items-center justify-center text-primary text-md font-lato font-bold cursor-pointer hover:bg-secondary hover:text-tertiary transform transition duration-300'}
        >
            <Link to='/portfolio'>
                {text}
            </Link>
        </button>
    )
}