import React from "react";
import Link from "next/link";
import Image from "next/image";
import ministerio from "../../../../public/ministerio.png"
import muni from "../../../../public/municipalidad.jpg"

export default function Footer(){
    return(
        <div>
            <footer class="bg-custom-beige w-full p-4">
                <h1 className="text-center text-3xl font-semibold text-green-800"> HABILITADOS POR:</h1>
                <div className="flex items-center justify-center ">
                <Image className="p-8" width={400} height={300} src={ministerio} alt="Ministerio de Salud"/>
                <Image className="p-8" width={280} height={300} src={muni} alt="Municipalidad de Luján de Cuyo"/>
                </div>
            </footer>
         </div>
    )
}