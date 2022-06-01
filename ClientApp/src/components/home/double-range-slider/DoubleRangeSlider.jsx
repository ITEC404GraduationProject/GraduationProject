import "nouislider/distribute/nouislider.css";
import "./DoubleRangeSlider.scss"
import Nouislider from "nouislider-react";

const DoubleRangeSlider = ({values, onValueChange}) => {

    return (
        <div className="double-range__container">
            <Nouislider
                range={{min: values.minValue, max: values.maxValue}}
                start={[values.minValue, values.maxValue]}
                onSlide={e => onValueChange(e)}
                step={1}
            />
        </div>
    )

}

export default DoubleRangeSlider