import React from "react";
import Link from "next/link";
import Image from "next/image";
import foto1 from "../../../../public/manos.jpg";

export default function Galeria() {
  return (
    <div id="Galeria" className="text-center py-16 bg-stone-400">
      <h1 className=" text-4xl font-bold tracking-tight text-custom-beige sm:text-5xl">
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
            src={foto1}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
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
            src={foto1}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
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
            src={foto1}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
