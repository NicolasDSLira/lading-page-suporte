import Image from "next/image";
import React from "react";

export const Card = ( { color, title, text, arrow } : {color: string, title: string, text: string, arrow: string } ) => {

    return (
        <div className={color === 'main' ? 'anime anime-left flex flex-col items-center justify-center gap-4 overflow-hidden' : 'anime anime-right flex flex-col items-center justify-center gap-4 overflow-hidden'}>
            <div className={
                color === 'main' ?
                    'bg-main px-6 py-10 pattern rounded-2xl text-white space-y-4' :   
                    'bg-secondary px-6 py-10 pattern rounded-2xl text-white space-y-4'}>
                <h1 className="text-lg font-black">{title}</h1>
                <p className="text-base">{text}</p>
            </div>
            {
                arrow == 'TRUE' ?
                <Image src={'./icons/arrow.svg'} width={50} height={50} alt='Arrow' />
                :
                <></>
            }

        </div>
    );
}

export const CardRow = ( { color, title, text, arrow } : {color: string, title: string, text: string, arrow: string } ) => {
    return (
        <div className="flex-1 min-w-0 my-10 flex flex-row gap-4 items-stretch justify-center overflow-hidden">

            <div className={
                color === 'main' ?
                    'bg-main px-6 py-10 pattern rounded-2xl text-white space-y-4 w-full max-w-[80%] flex-1 h-full' :   
                    'bg-secondary px-6 py-10 w-4/8 pattern rounded-2xl text-white space-y-4 '}>
                <h1 className="text-lg font-black">{title}</h1>
                <p className="text-base">{text}</p>
            </div>
            
                <Image src={'./icons/arrow.svg'} width={50} height={50} alt='Arrow' className={arrow == 'TRUE' ? "rotate-[270deg] max-w-fit" : "opacity-0 rotate-[270deg] max-w-fit"} />
            

        </div>
    )
}

export const Item = ( { children, }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full h-[70px] bg-white gap-4 justify-center items-center p-4  shadow-zinc-500 shadow-md rounded-3xl anime-left anime">
            <Image
                width={20}
                height={20}
                src={'./icons/ferramenta.svg'}
                alt="Serviço"
            />
            <p className="w-full font-bold">{children}</p>
        </div>

    )
}



export default {Card, Item, CardRow}; 

