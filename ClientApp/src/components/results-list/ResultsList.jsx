import "./ResultsList.scss"

import data from "../../data/offers.json"
import ResultsItem from "../results-item/ResultsItem";

const ResultsList = () => {

    console.log(data)

    return (
        <div className="results-list">
            { data.map((item) => <ResultsItem item={item} />) }
        </div>
    )
}

export default ResultsList