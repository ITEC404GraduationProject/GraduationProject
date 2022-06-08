import React, {useEffect, useState} from 'react';
import Header from "../header/Header";
import "./offer.scss"
import {useParams} from "react-router-dom";
import $api from "../../http";
import userIcon from "../../assets/icons/user.png"

const Offer = () => {

    const offerId = useParams().id

    const [offerData, setOfferData] = useState(null)

    useEffect(() => {
        getOffer(offerId)
    }, [offerId])

    const getOffer = async (offerId) => {
        const response = await $api.get(`/offer/${offerId}`, {withCredentials: true})
        setOfferData(response.data)
    }

    return (
        <div>
            <Header />
            {
                offerData &&
                <div className="container">
                    <div className="page__row">
                        <div className="offer">
                            <div className="offer__image">
                                <img src={"https://localhost:7039/api/offer/image/" + offerData.offer.imageLink}
                                     alt={"Housing"}/>
                            </div>
                            <div className="offer__info">
                                <div className="offer__top">
                                    <h3>{offerData.offer.title}</h3>
                                    <div className="offer__price">
                                        <h3>{offerData.price.amount * 12}$ / year</h3>
                                        <h4>{offerData.price.amount}$ / month</h4>
                                    </div>
                                </div>
                                <div>
                                    {offerData.offer.description}
                                </div>
                                <div className="offer__agent">
                                    <div className="offer__agent-avatar">
                                        <img src={userIcon} alt=""/>
                                    </div>
                                    <div>
                                        {offerData.agent.name + " " + offerData.agent.surname}
                                    </div>
                                    <div>
                                        +7-963-223-33-36
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Offer;