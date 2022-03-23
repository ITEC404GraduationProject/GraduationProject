import "./SliderWithSearch.scss"
import {useEffect, useRef} from "react";
import {GrNext, GrPrevious} from "react-icons/all";
import Sim from "../../style/scripts/homePageSlider";

const SliderWithSearch = () => {

    const sliderRef = useRef()

    useEffect(() => {
        new Sim(sliderRef.current)
    }, [])

    return (
        <div className="search-slider" ref={sliderRef}>
            <ul className="search-slider__list">
                <li className="search-slider__element">
                    <img src="https://fijivoyage.com/wp-content/uploads/2020/06/usa-new-york_.jpg" alt="1"/>
                </li>
                <li className="search-slider__element">
                    <img src="https://www.anypics.ru/download.php?file=201307/2560x1600/anypics.ru-69845.jpg"
                         alt="2"/>
                </li>
                <li className="search-slider__element">
                    <img
                        src="https://www.tripsavvy.com/thmb/tprq2yCdB7EURb66Y_qOI-7_x7A=/2121x1414/filters:fill(auto,1)/nyc-chinatown-view-5c2e485e4cedfd00019e15fc.jpg"
                        alt="3"/>
                </li>
                <li className="search-slider__element">
                    <img src="https://tobeamerica.com/media/wysiwyg/New-York/33.jpg" alt="4"/>
                </li>
                <li className="search-slider__element">
                    <img
                        src="https://besthqwallpapers.com/Uploads/5-4-2021/161454/new-york-city-4k-avenue-nyc-rain.jpg"
                        alt="5"/>
                </li>
            </ul>

            <GrPrevious className="search-slider__arrow-left" />
            <GrNext className="search-slider__arrow-right" />
            <div className="search-slider__dots" />

        </div>
    )
}

export default SliderWithSearch