import "./SearchForm.scss"

import {GrDown, AiOutlineSearch} from "react-icons/all";

import showSearchMore from "../../style/scripts/showSeacrhMore";

const SearchForm = () => {

    const options = [
        {key: 1, value: "All"},
        {key: 2, value: "1+1"},
        {key: 3, value: "2+1"},
        {key: 4, value: "3+1"},
        {key: 5, value: "Villa"},
        {key: 6, value: "Cottage"},
        {key: 7, value: "Townhouse"},
        {key: 8, value: "Dormitory"},
        {key: 9, value: "Other"},
    ]

    return (
        <form className="search__form">
            <div className="search__row">
                <div className="search__row-left">
                    <input className="search__input" placeholder="Search" />
                </div>
                <hr className="search__hr" />
                    <div className="search__row-right">
                        <select defaultValue={1} className="search__select" name="housingTypes">
                            { options.map(
                                (option) =>
                                    (<option key={option.key} value={option.key}>{option.value}</option>))}
                        </select>
                        <div className="search__button">
                            <div className="search__icon-wrap">
                                {/*<img src="../assets/icons/loupe.png" />*/}
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
            </div>
            <div className="search__more">

            </div>
            <div className="search__show-more" onClick={showSearchMore}>
                <GrDown className="show-more__arrow" />
            </div>
        </form>
    )
}

export default SearchForm