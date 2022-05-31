import "./SearchResults.scss"

import Header from "../header/Header";
import SideSearchbar from "../side-search-bar/SideSearchbar";
import ResultsList from "../results-list/ResultsList";
import {useEffect, useState} from "react";
import $api from "../../http";

const SearchResults = () => {


    const [data, setData] = useState([])
    const [displayedData, setDisplayedData] = useState([])

    useEffect(async () => {
        const response = await $api.get(`/offer`, {withCredentials: true})
        setData(response.data)
        setDisplayedData(response.data)
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="page__row">
                    <SideSearchbar data={data} displayedData={displayedData} setDisplayedData={setDisplayedData} />
                    <ResultsList data={displayedData} />
                </div>
            </div>
        </div>
    )
}

export default SearchResults