import "./SearchForm.scss"

import {GrDown, AiOutlineSearch} from "react-icons/all";

import showSearchMore from "../../style/scripts/showSeacrhMore";

import {useEffect, useState} from "react";
import DoubleRangeSlider from "../double-range-slider/DoubleRangeSlider";

const SearchForm = () => {

    const [values, setValues] = useState(null)

    const [searchParams, setSearchParams] = useState(null)

    const onValueChange = (value) => {
        setSearchParams(prev => {
            return {minValue: parseInt(value[0]), maxValue: parseInt(value[1])}
        })
    }

    useEffect(() => {
        setValues({minValue: 0, maxValue: 5000})
        setSearchParams({minValue: 0, maxValue: 5000})
    }, [])

    const options = [
        {key: 1, value: "All"},
        {key: 2, value: "1+1"},
        {key: 3, value: "2+1"},
        {key: 4, value: "3+1"},
        {key: 5, value: "Villa"},
        {key: 6, value: "Cottage"},
        {key: 7, value: "Townhouse"},
        {key: 8, value: "Dormitory"},
        {key: 9, value: "Other"},
    ]

    return (
        <form className="search__form">
            <div className="search__row">
                <div className="search__row-left">
                    <input className="search__input" placeholder="Search" />
                </div>
                <hr className="search__hr" />
                    <div className="search__row-right">
                        <select defaultValue={1} className="search__select" name="housingTypes">
                            { options.map(
                                (option) =>
                                    (<option key={option.key} value={option.key}>{option.value}</option>))}
                        </select>
                        <div className="search__button">
                            <div className="search__icon-wrap">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
            </div>
            { values &&
                <div className="search__more">
                    <div className="show-more__price-inputs">
                        <span>{values.minValue}</span>
                        <span>{values.maxValue}</span>
                    </div>
                    <DoubleRangeSlider values={values} onValueChange={onValueChange} />
                    <div className="show-more__price-inputs">
                        <input type="text" value={searchParams.minValue} />
                        <input type="text" value={searchParams.maxValue} />
                    </div>
                    <div className="show-more__checkbox-group">
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Bed</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>TV</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Internet</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Microwave</label></div>
                    </div>
                    <div className="show-more__checkbox-group">
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Kitchen</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Washing Machine</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Air Conditioner</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Iron</label></div>
                    </div>
                </div>
            }
            <div className="search__show-more" onClick={showSearchMore}>
                <GrDown className="show-more__arrow" />
            </div>
        </form>
    )
}

export default SearchForm