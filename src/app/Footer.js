import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <main className="footer-main">
      <footer>
        <div className="about">
          <h2>ABOUT US</h2>
          <p>
            <b>Hydromatics LTD </b>
            is a private company based in Nairobi, Industrial Area, Enterprise
            Road. We are one of the <b>leading partners</b> in industrial
            automation and stockists of a wide range of <b>hydraulic</b>,
            <b> pneumatic</b> equipments, <b>electric & electronic </b>
            equipment, process control valves, industrial automation products,
            and testing & measuring instruments.
          </p>
        </div>

        <div className="social">
          <h2>FOLLOW US</h2>
          <div>
            <a
              href="https://www.facebook.com/hydromaticsea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare title="Facebook" className="icons" />
            </a>
            <a
              href="https://www.instagram.com/hydromaticsea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram title="Instagram" className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/company/hydromatics-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin title="LinkedIn" className="icons" />
            </a>
          </div>
        </div>
      </footer>
          <hr />
          <p className="copy">&copy; 2021 Hydromatics Limited. All Right Reserved.</p>
    </main>
  );
}
