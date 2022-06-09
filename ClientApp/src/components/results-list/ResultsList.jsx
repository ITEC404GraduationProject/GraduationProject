import "./ResultsList.scss"

import ResultsItem from "../results-item/ResultsItem";


const ResultsList = ({ data }) => {
    return (
        <div className="results-list">
            { data?.map((item) => <ResultsItem key={data?.offer?.id} item={item} />) }
        </div>
    )
}

export default ResultsList