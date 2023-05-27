import "./Search.scss";
import { BsBook,BsClock,BsTranslate } from 'react-icons/bs';
import { FaGraduationCap } from "react-icons/fa";
import { ImRocket } from "react-icons/im";
import Cart from "../../Cart/Cart"

const Search = () => {
    return <div className="flotingbox">

        <div className="floatingDiv">
            <div className="video">
              <Cart/>
            </div>
            <div className="priceandvideo">
                <div className="price">
                    <span>&#8377;1,999.00</span> {/* Added &#8377; for Rupee symbol */}
                    <h3>&#8377;699.00</h3> {/* Added &#8377; for Rupee symbol */}
                </div>
                <div className="buttonBox">
                    <button className="button">BUY NOW</button>
                </div>
            </div>
            <div className="course">
                <h3 className="CourseHeading">Course Features</h3>
                <ul className="list">
                    <li className="ListName"> <span className="icon"><BsBook/></span>   <h5 className="CourseFeature"> Lectures 11</h5>   </li>
                    <li className="ListName"> <span className="icon"><BsClock/></span>   <h5 className="CourseFeature"> Duration 10 days</h5>   </li>
                    <li className="ListName"> <span className="icon"><BsTranslate/></span>   <h5 className="CourseFeature"> Language Hindi</h5>   </li>
                    <li className="ListName"> <span className="icon"><FaGraduationCap/></span>   <h5 className="CourseFeature"> Students 3179</h5>   </li>
                    <li className="ListName"> <span className="icon"><ImRocket/></span>   <h5 className="CourseFeature"> Assessments Yes</h5>   </li>
                </ul>
            </div>

        </div>
    </div>;
};

export default Search;
