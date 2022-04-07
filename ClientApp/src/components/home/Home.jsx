import "./Home.scss"
import {useWindowSize} from "../../hooks/useWindowSize";
import Header from "../header/Header";
import SliderHomePage from "./slider-home-page/SliderHomePage";
import SearchForm from "./search-form/SearchForm";


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