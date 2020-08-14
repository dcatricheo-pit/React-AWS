import React, { useState, useEffect } from 'react';
import { Button , Form} from 'react-bootstrap';

export const EstadoForm = () => {
    // Declaración de una variable de estado que llamaremos "valor"
    const [valor, setValor] = useState({
        email: "",
        password: ""
    });


    //eventos en JavaScript
    //https://www.arkaitzgarro.com/javascript/capitulo-15.html

 const handleInputChange = (e) => {
     //Link sobre operador de reparto/descanso (...valor)
     //https://www.it-swarm.dev/es/javascript/que-hacen-estos-tres-puntos-en-reaccionar/1053132277/#:~:text=Los%20tres%20puntos%20en%20JavaScript%20son%20operador%20de%20reparto%2Fdescanso%20.&text=La%20sintaxis%20de%20propagaci%C3%B3n%20permite,donde%20se%20esperan%20m%C3%BAltiples%20argumentos.&text=La%20sintaxis%20del%20par%C3%A1metro%20resto,un%20n%C3%BAmero%20variable%20de%20argumentos.
    setValor({
        ...valor,
        [e.target.name]: e.target.value
    })

    console.log({
        ...valor,
        [e.target.name]: e.target.value
    })
 }

 const handleSubmit = (e) => {
     e.preventDefault();
     
     console.log(" y asi es como hago un post: ")
     console.log(valor.email)
     console.log(valor.password)
 }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={valor.email} onChange={handleInputChange} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={valor.password} onChange={handleInputChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

