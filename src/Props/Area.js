import React, {useRef, useState} from 'react';
import {PropsRecibido} from './PropsRecibido';

export const Area = ()=>{
    const largo = useRef(null);
    const ancho = useRef(null);
    const [calculo, setCalculo] = useState(null);


    const calcular = () => {
         setCalculo(largo.current.value*ancho.current.value);
    }

    console.log(calculo)

return (
    <div>
        <input type="text" ref={largo}/>
        <input type="text" ref={ancho}/>
        <button onClick={calcular}>Calcular</button>
        <PropsRecibido resultado={calculo}/>
    </div>
)

}