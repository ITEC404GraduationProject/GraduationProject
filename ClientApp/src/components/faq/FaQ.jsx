import "./FaQ.scss"
import Accordion from "./Accordion";

// import "../css/main.css";
// import "/main.scss";


import fffq from "../images/fffq.svg";
import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";
import Header from "../header/Header";

const questionsAnswers = [
    {
        question: "How do I search for a suitable apartment for my stay?",
        answer:
            "It is very easy. Click on the search box and enter the type of apartment you want. Immediately, all available apartment will show including prices of the apartments. You can filter for more specific accommodation request as price per apartment, amenities in the apartments etc.",
    },
    {
        question: "Do you charge any fees for your services?",
        answer:
            "No, Cyprus Homes doesn’t charge any fees for its services. Our service is completely free of charge and we will not add to your accommodation any additional fee for our service.",
    },
    {
        question: "Are the rates on your web site per person or per room?",
        answer: `The price is always per apartment, unless it is stated on the website.`,
    },
    {
        question: "Are fees and taxes included in prices?",
        answer: `This is different for each province and also any type of accommodation. For this information, please always check the apartment conditions by clicking on the name of the apartment you are interested in.`,
    },
    {
        question: "How do book accommodation?",
        answer: `Booking is possible by completing the reservation form on the website. Select the type of apartment and date of your stay. The system will show you the price for the accommodation (always check the room conditions). If you agree with the total price and the booking conditions, just click on red button "Book now" and the reservation form will show up. Once you finish the order form and click on button "Book now", your reservation will be confirmed shorty to your email address.`,
    },
];

const FaQp = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="cc" />
                <div className="component">
                    <div className="illustration">
                        <img
                            className="illustration__woman-desktop"
                            src={fffq}
                            alt="illustration with woman"
                        />
                        <img
                            className="illustration__woman-mobile"
                            src={illustration__woman_mobile}
                            alt="illustration with woman"
                        />
                    </div>
                    <Accordion questionsAnswers={questionsAnswers} />
                </div>

            </div>
        </>
    );
};

export default FaQp