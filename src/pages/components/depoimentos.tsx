import React from "react"
import Image from "next/image"

export default function Depoimentos ({children} : {children: React.ReactNode}) {
    return (
        <div className="bg-main pattern-depoimentos p-10">
            <div className="space-y-10">
                <h1 className="text-white font-bold text-3xl">Depoimentos</h1>
                <div className="flex gap-10 flex-col lg:flex-row">{children}</div>
            </div>
        </div>
    )
}


export function Depoimento ({children}:{children:React.ReactNode}) {
    return (
        <div className="bg-[#F5F5F4] justify-center p-6 rounded-2xl flex flex-col gap-4 border">
            {children}
            <div>
                <Image 
                    width={190}
                    height={56}
                    src={'./icons/star.svg'}
                    alt="Stars"
                    className="mx-auto"
                />
            </div>
        </div>
    )
}
