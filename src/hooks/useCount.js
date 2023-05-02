import { useState } from "react";

export const useCount = (valInicial = 1, min, max)=>{
  //Hacemos que el valor inicial por defecto sea uno, para mejorar la UX

  if(valInicial < min || valInicial > max){
    valInicial = min
  }

  const [count, setCount] = useState(valInicial)
  const increase = ()=> count < max && setCount(count + 1 )
  const decrease = ()=> count > min && setCount(count - 1 )
  const reset = ()=> setCount(valInicial) // Reseteo a valor inicial (1)

  return {count, increase, decrease, reset}

}