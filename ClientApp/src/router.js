import {Switch, Redirect, Route} from "react-router-dom";
import Home from "./components/home/Home";
import SearchResults from "./components/search-results/SearchResults";
import Accordion from "./components/faq/FaQ";
import FaQp from "./components/faq/FaQ";
import AbtUs from "./components/about/about";
import ForUsr from "./components/forusers/forusers";


const Routes = () => {
    return (
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/results">
                <SearchResults />
            </Route>
            <Route path="/agents">

            </Route>
            <Route path="/forusers">
                <ForUsr />
            </Route>
            <Route path="/about">
                <AbtUs />
            </Route>
            <Route path="/faq">
                <FaQp />
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