import React from "react";
import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

export const Home: React.FC = () => {
    return (
        <div>

            <p>Página principal</p>
            <Link to="/contact">ir a contactos</Link>
            <Button className="primary" >boton</Button>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}