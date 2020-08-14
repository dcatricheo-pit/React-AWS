import React from "react";
import {Nav} from "react-bootstrap";

export const Header: React.FC = () => {
    return (
        <div className="header p-5">
            <h1>Header texto sin recargar</h1>

            <Nav
                activeKey="/home"
            >
                <Nav.Item>
                    <Nav.Link href="/home">home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">Contactos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/form">form</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}