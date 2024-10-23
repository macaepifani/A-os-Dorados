import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.css"

export default function Mas() {
  return (
    <div className="bg-white" id="mas">
      <div className="relative px-4 pt-4 lg:px-4">
        <div className="mx-auto max-w-full py-28 sm:py-28 lg:py-28">
          <div className="text-center">
           <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-5xl lg:text-7xl">SERVICIOS</h1> 
            <div className="mt-8 flex items-center justify-center w-full">
                <p className="cuadro-texto w-full">
                    Atención las 24hs · Cocina · Mucamas de limpieza · Lavandería · Planchado <br/>
                    Actividades recreativas · Artes plásticas · Zooterapia · Cine · Caminatas · Festejos · Apoyo espiritual <br/>
                    Excelentes instalaciones adaptadas · WiFi · TV · Amplios jardines · Cámaras de seguridad
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
