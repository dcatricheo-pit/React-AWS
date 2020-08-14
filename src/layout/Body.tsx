import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Home} from "../view/Home";
import {Contact} from "../view/Contact";
import {Container} from "react-bootstrap";
import { EstadoForm } from "../UseStateUseEffect/EstadoForm";

export const Body: React.FC = () => {
    return (
        <Container className="body">
            <Switch>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Route path="/form" exact component={EstadoForm}></Route>
                <Redirect from="*" to="/home"/>
            </Switch>
        </Container>
    )
}