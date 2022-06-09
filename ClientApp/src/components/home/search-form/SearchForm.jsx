import "./SearchForm.scss"

import {useEffect, useState} from "react";

import {GrDown, AiOutlineSearch} from "react-icons/all";
import DoubleRangeSlider from "../double-range-slider/DoubleRangeSlider";
import showSearchMore from "../../../style/scripts/showSeacrhMore";
import {Link} from "react-router-dom";
import $api from "../../../http";

const SearchForm = () => {

    const [values, setValues] = useState(null)

    const [keyword, setKeyword] = useState("")

    const [searchParams, setSearchParams] = useState()

    const [formFurnitureData, setFormFurnitureData] = useState({
        hasBed: false, hasTV: false, hasInternet: false, hasMicrowave: false,
        hasKitchen: false, hasWashingMachine: false, hasAirConditioner: false, hasIron: false
    })

    const onFurnitureChange = (e, field) => {
        setFormFurnitureData(prev => ({...prev, [field]: !formFurnitureData[field]}))
    }

    const onValueChange = (value) => {
        setSearchParams({minValue: parseInt(value[0]), maxValue: parseInt(value[1])})
    }

    useEffect( async () => {
        const response = await $api.get(`/price/minmax`, {withCredentials: true})
        if (response.data.length > 0) {
            if (response.data[0]?.amount === response.data[0]?.amount ) {
                setValues({minValue: response.data[0]?.amount - 1, maxValue: response.data[1]?.amount + 1})
                setSearchParams({minValue: response.data[0]?.amount - 1, maxValue: response.data[1]?.amount + 1})
            } else {
                setValues({minValue: response.data[0]?.amount, maxValue: response.data[1]?.amount})
                setSearchParams({minValue: response.data[0]?.amount, maxValue: response.data[1]?.amount})
            }
        } else {
            setValues({minValue: 0, maxValue: 1})
            setSearchParams({minValue: 0, maxValue: 1})
        }
    }, [])


    const options = [
        {key: 1, value: "All"},
        {key: 2, value: "1+1"},
        {key: 3, value: "2+1"},
        {key: 4, value: "3+1"},
        {key: 5, value: "Villa"},
        {key: 6, value: "Cottage"},
        {key: 7, value: "Townhouse"},
        {key: 8, value: "Other"},
    ]


    return (
        <form className="search__form">
            <div className="search__row">
                <div className="search__row-left">
                    <input value={keyword} onChange={e => setKeyword(e.target.value)} className="search__input" placeholder="Search" />
                </div>
                <hr className="sep-line__vert" />
                <div className="search__row-right">
                    <select defaultValue={1} className="search__select" name="housingTypes">
                        { options.map(
                            (option) =>
                                (<option key={option.key} value={option.key}>{option.value}</option>))}
                    </select>
                    <Link to={{
                        pathname: '/results',
                        state: {keyword, values, searchParams, formFurnitureData}}}
                        className="search__button-wrap">
                        <button type={"button"}>
                            <AiOutlineSearch />
                        </button>
                    </Link>
                </div>
            </div>
            { values &&
                <div className="search__more">
                    <div className="show-more__price-inputs">
                        <span>{values?.minValue}</span>
                        <span>{values?.maxValue}</span>
                    </div>
                    <DoubleRangeSlider values={values} onValueChange={onValueChange} />
                    <div className="show-more__price-inputs">
                        <input type="text" readOnly={true} value={searchParams?.minValue} />
                        <input type="text" readOnly={true} value={searchParams?.maxValue} />
                    </div>
                    <div className="show-more__checkbox-group">
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasBed} onChange={e => onFurnitureChange(e, "hasBed")} id={"checkbox1"} type={"checkbox"} /><label htmlFor={"checkbox1"}>Bed</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasTV} onChange={e => onFurnitureChange(e, "hasTV")} id={"checkbox2"} type={"checkbox"} /><label htmlFor={"checkbox2"}>TV</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasInternet} onChange={e => onFurnitureChange(e, "hasInternet")} id={"checkbox3"} type={"checkbox"} /><label htmlFor={"checkbox3"}>Internet</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasMicrowave} onChange={e => onFurnitureChange(e, "hasMicrowave")} id={"checkbox4"} type={"checkbox"} /><label htmlFor={"checkbox4"}>Microwave</label></div>
                    </div>
                    <div className="show-more__checkbox-group">
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasKitchen} onChange={e => onFurnitureChange(e, "hasKitchen")} id={"checkbox5"} type={"checkbox"} /><label htmlFor={"checkbox5"}>Kitchen</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasWashingMachine} onChange={e => onFurnitureChange(e, "hasWashingMachine")} id={"checkbox6"} type={"checkbox"} /><label htmlFor={"checkbox6"}>Washing Machine</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasAirConditioner} onChange={e => onFurnitureChange(e, "hasAirConditioner")} id={"checkbox7"} type={"checkbox"} /><label htmlFor={"checkbox7"}>Air Conditioner</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasIron} onChange={e => onFurnitureChange(e, "hasIron")} id={"checkbox8"} type={"checkbox"} /><label htmlFor={"checkbox8"}>Iron</label></div>
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