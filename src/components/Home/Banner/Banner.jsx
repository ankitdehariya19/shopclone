import "./Banner.scss";
import {BsFileEarmark} from "react-icons/bs"
import {MdHttps} from "react-icons/md"
const Banner = () => {
    return <div className="Banner">
         
        <div className="content01"> 
        
           

             <div className="courseBox">
             <h4 className="chapterHeading">chapter 1</h4>
                <ul className="lectureList">
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.1</span> <div><h5>Free Course  </h5></div>  <span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.2</span> <div><h5>Lesson No. 1</h5></div> <span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.3</span> <div><h5>Lesson No. 2</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.4</span> <div><h5>Lesson No. 3</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.5</span> <div><h5>Lesson No. 4</h5></div> <span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.6</span> <div><h5>Lesson No. 5</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.7</span> <div><h5>Lesson No. 6</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.8</span> <div><h5>Lesson No. 7</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.9</span> <div><h5>Lesson No. 8</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                    <li className="lectureName"> <span><BsFileEarmark className="fileIcon"/>Lecture 1.10</span><div><h5>Lesson No 9</h5></div><span className="lock"><MdHttps className="lockIcon"/></span> </li>
                   
                </ul>
             </div>


        </div>
        <div className="content02">
             <h3 className="heading">Get ready for a game-changing experience!</h3>
             <p className="paragraph">Our 7-10 day course starting on May 20, 2023, will teach you everything you need to know about growing your  <br/>
                 YouTube presence with 
              shorts.</p>
              <img src="https://jgd2a41639sj.cdn.shift8web.com/wp-content/uploads/2023/05/1111-1-300x188.png" alt="" className="channelAnalyticsPic"></img>
              <p className="paragraph">You’ll learn how to create killer content, monetize your channel, and much more. After the course, you’ll <br/>
              receive live classes and we’ll work together to grow a new channel for you in just 3 months. This is an <br/>
               opportunity to take your YouTube game to the next level and earn serious money.  Let’s start something crazy <br/>
                together – be a part of the first-ever course of its 
                 kind!</p>
                 <br/><br/>
                 <p className="paragraph ">Watch me demonstrate my strategies live</p> 
                 <br/><br/>
                 <p className="paragraph">Not your average DM Course</p>
                 <br/><br/>
                 <h4 className="offer">LIMITED PERIOD OFFER</h4>

        </div>
        <div className="content03">
              <div><h3 className="heading">INSTRUCTOR</h3></div>
              <div className="Infobox">
              <div className="profileImgBox">
                <img src="https://secure.gravatar.com/avatar/bcc5d4239e83dc8ae5aac034e02d8ab2?s=250&d=mm&r=g" alt="" className="profileimg"></img>
             </div>

             <div className="AboutBox">
                <h4 className="sigma"> Sigma </h4>
                <p>Hi, I'm Sigma, the founder of Gen-Z Way, a highly successful YouTube channel and <br/>
                marketing agency. In just four months, we generated an impressive 150K subscribers and <br/>
                 gained over 15Cr views. Our channel's success has enabled us to earn 5 Lakhs per month,<br/>
                  a testament to our expertise in this field.</p>
                  <br/><br/>
                  <p>At Gen-Z Way, we're passionate about sharing our knowledge and helping others achieve<br/>
                   similar success. We offer courses that teach our proven methods, covering everything from <br/>
                    creating short videos to growing your subscriber base.</p>
                    <br/><br/>
                    <p>Our team is dedicated to providing top-notch support to all our students, and we're excited <br/>
                     to have you join us on this journey. Let's work together to achieve your goals and take your<br/>
                      YouTube channel to the next level.</p>

             </div>
              </div>
             
        
        </div>

    </div>;
};

export default Banner;
