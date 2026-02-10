import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Componentes/Home"
import Registro from "../Componentes/Registro"
import React from 'react'
import Comisiones from "../Componentes/Comisiones";
import Acerca from "../Componentes/Acerca";
import Trabajos from "../Componentes/Trabajos";


const Approuter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contacto" component={Registro} />
                        <Route exact path="/comisiones" component={Comisiones} />
                        <Route exact path="/acerca" component={Acerca} />
                        <Route exact path="/trabajos" component={Trabajos} />
                    </div>
                </Switch>
            </Router>
        </>
    )
}

export default Approuter