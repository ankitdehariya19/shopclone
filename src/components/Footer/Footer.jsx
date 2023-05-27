import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="left">
          <li>Curriculum</li>
          <li>Overview</li>
          <li>Instructor</li>
        </ul>
        <div className="center">...... </div>
        <div className="right">
          <span>&#8377;1,999.00</span> {/* Added &#8377; for Rupee symbol */}
          <h3>&#8377;699.00</h3> {/* Added &#8377; for Rupee symbol */}
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
