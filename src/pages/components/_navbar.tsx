import Image from "next/image"



const Navbar = () => {
    return (
        <nav className="w-full flex justify-center items-center h-[100px] bg-[#0E6835] dark:bg-[#0F8E38]">
            <Image 
                height={50}
                width={200}
                src=".\LOGO.svg"
                alt="Raiztec"
                className="logo"
            />
        </nav>
    )
}

export default Navbar