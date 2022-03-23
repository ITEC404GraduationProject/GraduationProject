import "./Home.scss"

import Header from "../header/Header";
import SliderWithSearch from "../slider-with-search/SliderWithSearch";
import SearchForm from "../search-form/SearchForm";
import {useWindowSize} from "../../hooks/useWindowSize";


const Home = () => {
    const windowSize = useWindowSize()

    return (
        <div className="home">
            <Header />
            <div className="search-row">
                <SliderWithSearch />
                { windowSize.windowWidth > 720 && <SearchForm />}
            </div>

        </div>
    )
}

export default Home