import React from "react";
import Link from "next/link";
import Image from "next/image";
import foto1 from "../../../../public/baile.jpg";
import foto2 from "../../../../public/navidad.jpg";
import foto3 from "../../../../public/bingo.jpg";
import foto4 from "../../../../public/globos.jpg";
import foto5 from "../../../../public/acordeon.jpg";
import foto6 from "../../../../public/parque.jpg";
import foto7 from "../../../../public/perro.jpg";
import foto8 from "../../../../public/reyes.jpg";
import foto9 from "../../../../public/pintar.jpg";
import foto10 from "../../../../public/navidadcalle2.JPG";
import foto11 from "../../../../public/patio.jpg";
import foto12 from "../../../../public/fc.JPG";

export default function Galeria() {
  return (
    <div id="Galeria" className="text-center py-16 bg-stone-400">
      <h1 className=" text-3xl font-bold tracking-tight text-custom-beige sm:text-4xl lg:text-6xl">

        Galería de fotos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto1}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto2}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto3}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto4}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto5}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto6}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto7}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto8}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto9}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto10}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto11}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="p-2">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={foto12}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
