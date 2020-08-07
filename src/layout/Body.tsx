import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Home} from "../view/Home";
import {Contact} from "../view/Contact";
import {Container} from "react-bootstrap";

export const Body: React.FC = () => {
    return (
        <Container className="body">
            <Switch>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Redirect from="*" to="/home"/>
            </Switch>
        </Container>
    )
}