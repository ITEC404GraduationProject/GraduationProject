import "./SideSearchbar.scss"
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useQueryStringParams} from "../../hooks/useQueryStringParams";

const SideSearchbar = () => {

    return (
        <div className="side-search__wrap">
            <div className="side-search">
                <form className="search__form-a">
                    <h4>Search</h4>
                    <input type="text" placeholder="keyword"/>
                    <div className="search__checkboxes">
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Bed</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>TV</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Internet</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Microwave</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Kitchen</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Washing Machine</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Air Conditioner</label></div>
                        <div className="show-more__checkbox-input"><input name={"checkbox1"} type={"checkbox"} value={1} /><label htmlFor={"checkbox1"}>Iron</label></div>
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
                    <button className="search__btn">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SideSearchbar