import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../../public/logo.png"

export default function Navbar (){
    return(
        <nav className="bg-custom-beige fixed w-full z-20 top-0 start-0 border-b ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:justify-center lg:justify-between">
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} width={400} height={50} alt="Logo"/>
                </Link>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-lg border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <Link href="#" className="block py-2 px-3 text-stone-500 rounded hover:text-green-800 hover:underline md:p-0 " aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link href="#about" className="block py-2 px-3 text-stone-500 rounded   hover:text-green-800 hover:underline md:p-0 ">Quiénes Somos</Link>
                        </li>
                        <li>
                            <Link href="#servicios" className="block py-2 px-3 text-stone-500 rounded   hover:text-green-800 hover:underline md:p-0 ">Servicios</Link>
                        </li>
                        <li>
                            <Link href="Contacto" className="block py-2 px-3 text-stone-500 rounded  hover:text-green-800 hover:underline md:p-0 ">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}