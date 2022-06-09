import "./SearchResults.scss"

import Header from "../header/Header";
import SideSearchbar from "../side-search-bar/SideSearchbar";
import ResultsList from "../results-list/ResultsList";
import {useEffect, useState} from "react";
import $api from "../../http";
import {useHistory} from "react-router-dom";

const SearchResults = () => {

    const history = useHistory()

    const [data, setData] = useState([])
    const [displayedData, setDisplayedData] = useState([])

    const [filters, setFilters] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await $api.get(`/offer`, {withCredentials: true})
            setData(response.data)
            setDisplayedData(response.data)
        }
        fetchData()
        if (history.location.state) {
            moveFilters()
        }
    }, [])

    const moveFilters = () => {
        setFilters(history.location.state)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="page__row">
                    <SideSearchbar data={data} displayedData={displayedData} setDisplayedData={setDisplayedData} filters={filters} />
                    <ResultsList data={displayedData} />
                </div>
            </div>
        </div>
    )
}

export default SearchResults