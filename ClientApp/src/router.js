import {Switch, Redirect, Route} from "react-router-dom";

import Home from "./components/home/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/home">
                <Home />
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