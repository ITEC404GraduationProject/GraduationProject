import "./SearchForm.scss"

import {GrDown, AiOutlineSearch} from "react-icons/all";

import showSearchMore from "../../style/scripts/showSeacrhMore";

import {useEffect, useState} from "react";
import DoubleRangeSlider from "../double-range-slider/DoubleRangeSlider";

const SearchForm = () => {

    const [values, setValues] = useState(null)

    const [searchParams, setSearchParams] = useState(null)

    const onValueChange = (value) => {

        value[0] = parseInt(value[0])
        value[1] = parseInt(value[1])


        if (parseInt(value[0]) > parseInt(value[1])) { value[0] = value[1] }
        if (parseInt(value[1]) < value[0]) { value[1] = value[0] }
        if (value[0] < values.minValue) { value[0] = values.minValue }
        if (value[1] > values.maxValue) { value[1] = values.maxValue }
        onSetSearchParams(value)
    }

    const onSetSearchParams = (value) => {
        setSearchParams(prev => {
            return {minValue: parseInt(value[0]), maxValue: parseInt(value[1])}
        })
    }

    useEffect(() => {
        setValues({minValue: 200, maxValue: 5000})
        setSearchParams({minValue: 200, maxValue: 5000})
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
                    <DoubleRangeSlider minValue={values.minValue} maxValue={values.maxValue} onValueChange={onValueChange} />
                    <div className="show-more__price-inputs">
                        <input type="number" value={searchParams.minValue} onChange={e => onValueChange([e.target.value, searchParams.maxValue])}/>
                        <button type={"button"} onClick={() => {
                            console.log(searchParams)}
                        }>Test</button>
                        <input type="number" value={searchParams.maxValue} onChange={e => onValueChange([searchParams.minValue, e.target.value])}/>
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