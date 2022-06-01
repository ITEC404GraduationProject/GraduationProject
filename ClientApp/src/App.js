import "./App.scss"
import "./style/media/resolution.scss"
import "./style/utilities/utilities.scss"

import Routes from "./router";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes />
            </Router>
        </div>
    );
}
export default App;