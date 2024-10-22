import React from "react";
import Link from "next/link";
import Image from "next/image";
import ubicacion from "../../../../public/ubicacion.png"

export default function Contacto (){
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32" id="Contacto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-pretty text-7xl font-semibold tracking-tight text-green-800 sm:text-7xl">CONTACTANOS</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Si tenes preguntas, queres conocer nuestras instalaciones o cualquier inquietud, no dudes en ponerte en contacto con nosotros.</p>
                <p className="mt-10 text-pretty font-semibold tracking-tight text-stone-500 sm:text-lg">TELÉFONO</p>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-stone-700 sm:text-2xl">261-386-5456</p>
                <p className="mt-5 text-pretty font-semibold tracking-tight text-stone-500 sm:text-lg">WHATSAPP</p>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-stone-700 sm:text-2xl">261-505-6359</p>
                <p className="mt-5 text-pretty font-semibold tracking-tight text-stone-500 sm:text-lg">E-MAIL</p>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-stone-700 sm:text-2xl">losepifani@hotmail.com</p>
                <p className="mt-5 text-pretty font-semibold tracking-tight text-stone-500 sm:text-lg">UBICACIÓN</p>
                <p className="mt-2 text-pretty font-semibold tracking-tight text-stone-700 sm:text-2xl">Los Olivos 380, Barrio Parque Drummond, Luján de Cuyo.</p>
              </div>
            </div>
            <Image src={ubicacion} alt="Ubicacion" className="mt-28 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width={2400} height={1660}/>
          </div>
        </div>
      </div>
  
      )
}