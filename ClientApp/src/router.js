import {Switch, Redirect, Route, Link} from "react-router-dom";

import Home from "./components/home/Home";
import SearchResults from "./components/search-results/SearchResults";
import Registration from "./components/registration/Registration";
import ApiTest from "./components/api-test-page/ApiTest";
import CreateOffer from "./components/create-offer/CreateOffer";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./context/auth.context";
import Header from "./components/header/Header";
import Offer from "./components/offer/offer";
import Agents from "./components/agents/Agents";
import Accordion from "./components/faq/FaQ";
import FaQp from "./components/faq/FaQ";
import AbtUs from "./components/about/about";
import ForUsr from "./components/forusers/forusers";

const Routes = () => {

    const [accountType, setAccountType] = useState("")
    const auth = useContext(AuthContext)

    useEffect(() => {
        if (auth.user) {
            setAccountType(auth.user.accountType)
        } else {
            setAccountType("GUEST")
        }
    }, [auth])

    return (
        <Switch>
            { (accountType === "AGENT" || accountType === "STUDENT") &&
                <>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/results">
                        <SearchResults />
                    </Route>
                    { accountType === "AGENT" &&
                        <Route path="/create">
                            <CreateOffer />
                        </Route>
                    }
                    <Route path="/offer/:id">
                        <Offer />
                    </Route>
                    <Route path="/apitest">
                        <ApiTest />
                    </Route>
                    <Route path="/agents">
                        <Agents />
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
                </>
            }
            <Route path="/registration">
                <Registration />
            </Route>
            <Route path="/agents">
                <Agents />
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
            { accountType === "GUEST" &&
                <Route path="*">
                    <Redirect to="/agents">
                        <Header />
                        <div>123123</div>
                    </Redirect>
                </Route>
            }
        </Switch>
    )
}

export default Routes