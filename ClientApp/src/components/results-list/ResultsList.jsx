import "./ResultsList.scss"

import data from "../../data/offers.json"
import ResultsItem from "../results-item/ResultsItem";
import {useEffect, useState} from "react";
import $api from "../../http";

const ResultsList = () => {

    const [data, setData] = useState([])

    useEffect(async () => {
        const response = await $api.get(`/offer`, {withCredentials: true})
        setData(response.data)
    }, [])

    return (
        <div className="results-list">
            { data?.map((item) => <ResultsItem item={item} />) }
        </div>
    )
}

export default ResultsList