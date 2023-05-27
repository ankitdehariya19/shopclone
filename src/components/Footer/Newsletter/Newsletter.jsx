import "./Newsletter.scss";
import {BsFillEnvelopeCheckFill} from "react-icons/bs"
const Newsletter = () => {
    return <div className="footer01">
        <div className="logoImg">
            <img src="https://jgd2a41639sj.cdn.shift8web.com/wp-content/uploads/2023/05/121-300x300.png" alt="" className="biglogo"></img>
        </div>
        <div className="contectInfo">
               <h3><BsFillEnvelopeCheckFill className="MailIcon"/>help@genzway.in</h3>
               <h3>About Us</h3>
               <h3>Refund and Return Policy</h3>
        </div>
    </div>;
};

export default Newsletter;
