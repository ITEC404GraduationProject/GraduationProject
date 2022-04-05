import "./SearchResults.scss"

import Header from "../header/Header";
import SideSearchbar from "../side-search-bar/SideSearchbar";
import ResultsList from "../results-list/ResultsList";

const SearchResults = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <div className="page__row">
                    <SideSearchbar />
                    <ResultsList />
                </div>
            </div>
        </div>
    )
}

export default SearchResults