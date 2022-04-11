import "./FaQ.scss"
import Accordion from "./Accordion";

// import "../css/main.css";
// import "/main.scss";


import fffq from "../images/fffq.svg";
import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
    {
        question: "How many team members can I invite?",
        answer:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
        question: "What is the maximum file upload size?",
        answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        question: "How do I reset my password?",
        answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
        question: "Can I cancel my subscription?",
        answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
        question: "Do you provide additional support?",
        answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
];

const FaQp = () => {
    return (
        <div className="container">
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
    );
};

export default FaQp