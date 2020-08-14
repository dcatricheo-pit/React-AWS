import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

export const  EstadoBootstrap = () => {
    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(0);
    const [texto, setTexto]= useState("Inicio");
    const [valor, setValor] = useState ("este es mi valor")
    useEffect(()=> {
    switch (count) {
        case 0:
                setTexto("Inicio")
          break;
        case 1:
                setValor("ya es 1 click ahora seteo valor")
          break;
        case 2:
                setTexto("Si la cuenta se modifica a 2 yo tambien")
          break;
       
        case 3:
                setTexto("detente ya todos entendieron")
          break;
        default:
                 setTexto("una mas por si acaso :-)")
          break;
      }
    },[count])
    

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
             <Card.Title>{count}</Card.Title>
             <Card.Title>{texto}</Card.Title>
             <Card.Title>{valor}</Card.Title>
                <Card.Text>
                    Todo este texto pertenece a un componente estatico.
             </Card.Text>
                <Button onClick={()=> {setCount(count +1)}} variant="primary">Modificador del Estado</Button>
            </Card.Body>
        </Card>
        </>
    );
}

