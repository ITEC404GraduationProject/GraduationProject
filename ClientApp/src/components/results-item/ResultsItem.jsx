import "./ResultsItem.scss"

const ResultsItem = ({item}) => {
    return (
        <div className="results__item">
            <div className="item__img">
                <img src={item.imgLink} alt={"Housing"} />
            </div>
            <div className="item__info">
                <div className="item__info-left">
                    <div className="item__info-header">
                        <span>{item.name}</span>
                    </div>
                    <hr />
                        <div className="item__info-description">
                            <span>
                                {item.description}
                            </span>
                        </div>
                        <div className="item__info-service">
                            <span>Agent: {item.agent}</span>
                            <span>Address: {item.address}</span>
                        </div>
                </div>
                <div className="item__info-right">
                    <div>
                        <h3>3000$/Year</h3>
                        <h5>300$/Month</h5>
                    </div>
                    <div className="item__buttons-group">
                        <button>♡</button>
                        <button>Open</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsItem