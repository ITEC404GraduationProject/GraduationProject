import "./ResultsItem.scss"
import {Link} from "react-router-dom";

const ResultsItem = ({item}) => {

    return (
        <div className="results__item">
            <div className="item__img">
                <img src={"https://localhost:7039/api/offer/image/" + item.offer.imageLink} alt={"Housing"} />
            </div>
            <div className="item__info">
                <div className="item__info-left">
                    <div className="item__info-header">
                        <span>{item.offer.title}</span>
                    </div>
                    <hr />
                        <div className="item__info-description">
                            <span>
                                {item.offer.description}
                            </span>
                        </div>
                        <div className="item__info-service">
                            <span>Agent: {item.agent.name + " " + item.agent.surname}</span>
                            <span>Address: {item.offer.address}</span>
                        </div>
                </div>
                <div className="item__info-right">
                    <div>
                        <h3>{item.price.amount * 12}/Year</h3>
                        <h5>{item.price.amount}/Month</h5>
                    </div>
                    <div className="item__buttons-group">
                        <button>♡</button>
                        <button><Link to={`/offer/${item.offer.id}`}>Open</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsItem