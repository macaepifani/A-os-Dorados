import React from "react";
import Link from "next/link";
import Image from "next/image";
import hogar from "../../../../public/hogar.jpg"

export default function About() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-7xl font-semibold tracking-tight text-custom-beige sm:text-5xl">SOBRE NUESTRO HOGAR</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">El hogar fue fundado en 2001 por la señora Yolanda, motivada por los requerimientos de su propia madre y detectando esta necesidad de hogar y contención en muchas otras familias.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Hoy Años Dorados quiere ser la nueva familia de cada abuelo que vive en el hogar. Atendidos por personas amantes de su profesión y totalmente compromettidas con nuestro obejtivos: hacer que los días aquí sean placenteros y felices como aquellos añorados años de la juventud.</p>
            </div>
          </div>
          <Image src={hogar} alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width={2432} height={1442}/>
        </div>
      </div>
    </div>

    )
  }
  