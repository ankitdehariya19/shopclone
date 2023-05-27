import "./Header.scss";
import Search from "./Search/Search";
import { MdOutlineMarkEmailRead } from 'react-icons/md';




const Header = () => {
    return <header className="min-header">
                    <div className="header01">

                        <div className="contectUsInfo">
                        Contact: Us 
                        <span className="mailLogo"><MdOutlineMarkEmailRead/></span>
                        <span>help@genzway.in</span>
                        </div>

                        <div className="buttonBox">
                            <button className="button">Register</button>
                            <span>|</span>
                            <button className="button">Login</button>
                        </div>

                    </div>

                  
                    <div className="header02">
                        <img src="https://jgd2a41639sj.cdn.shift8web.com/wp-content/uploads/2023/05/121.png" className="logo" alt=""></img>
                    </div>
                    <div className="header03">
                             
                           <div className="headingName"> <h3> shorts Hack With Sigma </h3></div>
                           <div className="ProfileInfoName"> 

                           <div className="Infodiv">
                                <div className="imagebox">
                                <img className="profileImg" src="https://secure.gravatar.com/avatar/bcc5d4239e83dc8ae5aac034e02d8ab2?s=250&d=mm&r=g" alt=""></img>
                                </div>
                                <div className="textBox">
    
                                    <div className="TeacherBox">
                                    <h3 className="teacherText">Teacher</h3>
                                    </div>
                                    <div className="SigmaBox">
                                    <h3 className="SigmaText">Sigma</h3>
                                    </div>

                                </div>
                           </div>
                           
                               
                               
                               <Search/>
                           </div>
                    </div>
        
    </header>
};

export default Header;
