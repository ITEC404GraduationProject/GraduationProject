import "./App.scss"
import "./style/media/resolution.scss"
import "./style/utilities/utilities.scss"




import Routes from "./router";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/auth.context";

function App() {

    const {login, logout, token, user} = useAuth()
    const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{
            login, logout, token, user, isAuthenticated
        }}>
            <Router>
                <Routes />
            </Router>
        </AuthContext.Provider>
    );

}





export default App;