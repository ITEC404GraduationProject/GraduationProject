import React from 'react';
import "./CreateOffer.scss"
import Header from "../header/Header";

const CreateOffer = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="page__row">
                    <form>
                        Title <input  /> <br/>
                        Description <input  /> <br/>
                        Address <input  /> <br/>
                        Price per month <input  /> <br/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateOffer;