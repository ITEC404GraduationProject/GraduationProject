import {Switch, Redirect, Route} from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Test from "./components/login/sComp";


const Routes = () => {
    return (
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Test />
            </Route>
            <Route path="/agents">

            </Route>
            <Route path="/forusers">

            </Route>
            <Route path="/about">

            </Route>
            <Route path="/faq">

            </Route>
            <Route path="/">
                <Redirect to="/home">
                    <Home />
                </Redirect>
            </Route>
            <Route path="*">

            </Route>
        </Switch>
    )
}

export default Routes