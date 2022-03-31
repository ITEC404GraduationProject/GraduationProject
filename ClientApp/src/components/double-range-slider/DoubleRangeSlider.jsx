import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./DoubleRangeSlider.scss"

const DoubleRangeSlider = ({minValue, maxValue, onValueChange}) => {

    return (
        <div className="double-range__container">
            <Nouislider
                range={{min: minValue, max: maxValue}}
                start={[minValue, maxValue]}
                onSlide={e => onValueChange(e)}
                step={1}
            />
        </div>
    )

}

export default DoubleRangeSlider