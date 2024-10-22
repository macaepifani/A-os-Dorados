import React from "react";
import Hero from "../app/Components/Hero/Hero"
import About from "./Components/Feature/About";
import Servicios from "./Components/Feature/Servicios";
import Mas from "./Components/Feature/Mas"
import Galeria from "./Components/Feature/Galeria";
import Contacto from "./Components/Feature/Contacto";

export default function Home(){
  return(
    <div>
      <Hero/>
      <About/>
      <Servicios/>
      <Mas/>
      <Galeria/>
      <Contacto/>
    </div>
  )
}