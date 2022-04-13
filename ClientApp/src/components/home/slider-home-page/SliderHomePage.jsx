import "./SliderHomePage.scss"
import {useEffect, useRef} from "react";
import {GrNext, GrPrevious} from "react-icons/all";
import Sim from "../../../style/scripts/homePageSlider";

import bgImage1 from "../../../assets/images/sliderImage1.jpg"
import bgImage2 from "../../../assets/images/sliderImage2.jpeg"
import bgImage3 from "../../../assets/images/sliderImage3.jpeg"
import bgImage4 from "../../../assets/images/sliderImage4.jpg"
import bgImage5 from "../../../assets/images/sliderImage5.jpg"

const SliderHomePage = () => {

    const sliderRef = useRef()

    useEffect(() => {
        new Sim(sliderRef.current)
    }, [])

    return (
        <div className="search-slider" ref={sliderRef}>
            <ul className="search-slider__list">
                <li className="search-slider__element">
                    <img src={bgImage1} alt="1"/>
                </li>
                <li className="search-slider__element">
                    <img src={bgImage2} alt="2"/>
                </li>
                <li className="search-slider__element">
                    <img src={bgImage3} alt="3"/>
                </li>
                <li className="search-slider__element">
                    <img src={bgImage4} alt="4"/>
                </li>
                <li className="search-slider__element">
                    <img src={bgImage5} alt="5"/>
                </li>
            </ul>

            <GrPrevious className="search-slider__arrow-left" />
            <GrNext className="search-slider__arrow-right" />
            <div className="search-slider__dots" />

        </div>
    )
}

export default SliderHomePage