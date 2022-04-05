import "./Home.scss"

import Header from "../header/Header";
import SliderHomePage from "./slider-home-page/SliderHomePage";
import SearchForm from "./search-form/SearchForm";
import {useWindowSize} from "../../hooks/useWindowSize";


const Home = () => {
    const windowSize = useWindowSize()

    return (
        <>
            <Header />
            <div className="search-row">
                <SliderHomePage />
                { windowSize.windowWidth > 720 && <SearchForm />}
            </div>
        </>
    )
}

export default Home