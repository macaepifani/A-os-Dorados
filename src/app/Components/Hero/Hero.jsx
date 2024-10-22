import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.css"


export default function Hero() {
  return (
    <div className="background">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
           {/* <h1 className="text-4xl font-bold tracking-tight text-green-800 sm:text-7xl">La nueva familia que acompaña a los mayores</h1> */}
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="Feature" className="text-medium font-semibold leading-6 text-gray-300 hover:underline">
                Conocer más <span aria-hidden="true"> →</span>
              </Link>
            </div> */}
          </div>
        </div>
        
      </div>
    </div>
  );
}
