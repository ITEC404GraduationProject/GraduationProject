import React from 'react';
import userIcon from "../../../assets/icons/user.png";
import "./AgentsItems.scss"

const AgentsItem = ({item}) => {

    return (
        <div className="agents__item">
            <div className="agents__item-avatar">
                <img src={userIcon} alt=""/>
                <div>
                    {item.name + " " + item.surname}
                </div>
            </div>
            <div className="agents__item-info">
                <div className="contact__item">
                    <div>
                        Phone Number:
                    </div>
                    <div>
                        {item.contact}
                    </div>
                </div>
                <div className="contact__item">
                    <div>
                        E-mail:
                    </div>
                    <div>
                        {item.email}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsItem;