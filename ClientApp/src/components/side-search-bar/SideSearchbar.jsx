import "./SideSearchbar.scss"
import React, {useEffect, useState} from "react";

const SideSearchbar = ({data, displayedData, setDisplayedData}) => {

    const [keyword, setKeyword] = useState("")

    const [formFurnitureData, setFormFurnitureData] = useState({
        hasBed: false, hasTV: false, hasInternet: false, hasMicrowave: false,
        hasKitchen: false, hasWashingMachine: false, hasAirConditioner: false, hasIron: false
    })

    const reset = () => {
        setFormFurnitureData({hasBed: false, hasTV: false, hasInternet: false, hasMicrowave: false,
            hasKitchen: false, hasWashingMachine: false, hasAirConditioner: false, hasIron: false})
        setKeyword("")
    }

    const onFurnitureChange = (e, field) => {
        setFormFurnitureData(prev => ({...prev, [field]: !formFurnitureData[field]}))
    }

    useEffect(() => {
        filterTest()
    }, [formFurnitureData, keyword])

    const filterTest = () => {
        let hasFurnitureToFilter = false
        for(let key in formFurnitureData) {
            if (formFurnitureData[key] === true) {
                hasFurnitureToFilter = true
            }
        }

        let newData = data
        newData = newData.filter(offer => {
            if (keyword && !hasFurnitureToFilter) {
                return offer.offer.title.includes(keyword)
            }
            if (hasFurnitureToFilter) {
                let hasOption = false
                for (let key in formFurnitureData) {
                    if (formFurnitureData[key] === true) {
                        if (offer.furniture[key] === formFurnitureData[key]) {
                            hasOption = true
                        }
                    }
                }
                if (hasOption) {
                    return offer
                } else {
                    return false
                }
            }
            return false
        })
        setDisplayedData(newData)
        if (newData.length === 0 && !keyword) {
            setDisplayedData(data)
        }
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
                        <input type="text" placeholder="from"/>
                        <input type="text" placeholder="to"/>
                    </div>
                    <select>
                        <option>Year</option>
                        <option>6 months</option>
                        <option>3 months</option>
                        <option>1 month</option>
                    </select>
                    <div className="search__checkboxes">
                    </div>
                    <button type={"button"} className="search__btn">Search</button>
                    <button type={"button"} className="search__btn" onClick={reset}>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default SideSearchbar