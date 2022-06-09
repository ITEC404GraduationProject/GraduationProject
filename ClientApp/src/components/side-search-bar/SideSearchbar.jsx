import "./SideSearchbar.scss"
import React, {useEffect, useState} from "react";

const SideSearchbar = ({data, setDisplayedData, filters}) => {

    const [keyword, setKeyword] = useState("")

    const [values, setValues] = useState({minValue: 0, maxValue: 0})
    const [searchParams, setSearchParams] = useState({minValue: 0, maxValue: 0})

    const [formFurnitureData, setFormFurnitureData] = useState({
        hasBed: false, hasTV: false, hasInternet: false, hasMicrowave: false,
        hasKitchen: false, hasWashingMachine: false, hasAirConditioner: false, hasIron: false
    })

    const onReset = () => {
        setFormFurnitureData({hasBed: false, hasTV: false, hasInternet: false, hasMicrowave: false,
            hasKitchen: false, hasWashingMachine: false, hasAirConditioner: false, hasIron: false})
        setKeyword("")
        setSearchParams({...values})
    }

    const onFurnitureChange = (e, field) => {
        setFormFurnitureData(prev => ({...prev, [field]: !formFurnitureData[field]}))
    }

    useEffect(() => {
        filterTest()
    }, [formFurnitureData, keyword, data, searchParams])

    useEffect(() => {
        if (filters) {
            if (filters.keyword) {
                setKeyword(filters.keyword)
            }
            if (filters.values) {
                setValues(filters.values)
            }
            if (filters.searchParams) {
                setSearchParams(filters.searchParams)
            }
            if (filters.formFurnitureData) {
                setFormFurnitureData(prevState => ({...prevState, ...filters.formFurnitureData}))
            }
        }
    }, [filters])

    const filterTest = () => {
        let newData = data
        newData = newData.filter(offer => {
            if (offer.price.amount < searchParams.minValue || offer.price.amount > searchParams.maxValue) {
                return false
            }
            if (!offer.offer.title.toLowerCase().includes(keyword.toLowerCase())) {
                return false
            }
            for (let key in formFurnitureData) {
                if (formFurnitureData[key] === true && formFurnitureData[key] !== offer.furniture[key]) {
                    return false
                }
            }
            return true
        })
        setDisplayedData(newData)
    }

    return (
        <div className="side-search__wrap">
            <div className="side-search">
                <form className="side-search__form">
                    <h4>Search</h4>
                    <input type="text" placeholder="keyword" value={keyword} onChange={e => setKeyword(e.target.value)} />
                    <div className="search__checkboxes">
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasBed} onChange={e => onFurnitureChange(e, "hasBed")} id={"checkbox1"} type={"checkbox"} /><label htmlFor={"checkbox1"}>Bed</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasTV} onChange={e => onFurnitureChange(e, "hasTV")} id={"checkbox2"} type={"checkbox"} /><label htmlFor={"checkbox2"}>TV</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasInternet} onChange={e => onFurnitureChange(e, "hasInternet")} id={"checkbox3"} type={"checkbox"} /><label htmlFor={"checkbox3"}>Internet</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasMicrowave} onChange={e => onFurnitureChange(e, "hasMicrowave")} id={"checkbox4"} type={"checkbox"} /><label htmlFor={"checkbox4"}>Microwave</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasKitchen} onChange={e => onFurnitureChange(e, "hasKitchen")} id={"checkbox5"} type={"checkbox"} /><label htmlFor={"checkbox5"}>Kitchen</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasWashingMachine} onChange={e => onFurnitureChange(e, "hasWashingMachine")} id={"checkbox6"} type={"checkbox"} /><label htmlFor={"checkbox6"}>Washing Machine</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasAirConditioner} onChange={e => onFurnitureChange(e, "hasAirConditioner")} id={"checkbox7"} type={"checkbox"} /><label htmlFor={"checkbox7"}>Air Conditioner</label></div>
                        <div className="show-more__checkbox-input"><input checked={formFurnitureData.hasIron} onChange={e => onFurnitureChange(e, "hasIron")} id={"checkbox8"} type={"checkbox"} /><label htmlFor={"checkbox8"}>Iron</label></div>
                    </div>
                    <hr/>
                    <h4>Price</h4>
                    <div className="search__prices">
                        <input type="text" value={searchParams.minValue} onChange={e=> setSearchParams(prevState => ({...prevState, minValue: Number(e.target.value)}))} placeholder="from"/>
                        <input type="text" value={searchParams.maxValue} onChange={e=> setSearchParams(prevState => ({...prevState, maxValue: Number(e.target.value)}))} placeholder="to"/>
                    </div>
                    <div className="search__checkboxes">
                    </div>
                    <button type="button" onClick={onReset}>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default SideSearchbar