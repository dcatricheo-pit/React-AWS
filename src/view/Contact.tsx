import React from "react";
import {Link} from "react-router-dom";

export const Contact: React.FC = () => {
    return (
        <div>
            <p>Lista de contactos</p>
            <Link to="/home">ir al home</Link>
        </div>
    )
}