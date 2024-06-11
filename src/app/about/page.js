import { FaTools, FaThumbsUp, FaLightbulb } from "react-icons/fa";

export default function Page() {
  return (
    <div className="about-cont">
      <div className="heading">
        <h2>ABOUT US</h2>
        <img src="/images/gears.svg" alt="gears icon" />
      </div>

      <main className="about-main">
        <div className="wrapper">
          <div className="img">
            <img src="/images/greg.jpg" alt="Fluke products" />
            <div className="shape"></div>
          </div>
          <div className="content">
            <h2>WHO ARE WE ?</h2>
            <p>
              <b>Hydromatics LTD </b>
              is a private company based in Nairobi, Industrial Area, Enterprise
              Road. We are one of the <b>leading partners</b> in industrial
              automation and stockists of a wide range of <b>hydraulic</b>,
              <b> pneumatic</b> equipments, <b>electric & electronic </b>
              equipment, process control valves, industrial automation products,
              and testing & measuring instruments.
            </p>
            <p>
              We manufacture <b>hydraulic hoses</b> and pipes and stock various
              types of pipes and a wide range of hydraulic and
              <b> pneumatic seals</b>. We provide <b>training</b> and
              <b> training equipment </b>
              for industry needs. Currently, we have employeed over 25 staff
              members.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="content">
            <h2>Our History</h2>
            <p>
              Incorporated in <b>2003</b> as a private limited company,
              Hydromatics is located on plot number <b>209/4680</b> along
              <b> Enterprise Road</b>, Industrial Area. Since its inception, the
              company has built a reputation for taking on <b>challenges</b> in
              the <b>supply of hydraulic & pneumatic equipment</b>, including
              tenders for <b>training and equipment</b>, electric and electronic
              parts and accessories, and various types of test and measurement
              equipment.
            </p>
            <p>
              We are <b>registered suppliers</b> to reputable companies such as
              <b> East Africa Portland Cement Company Ltd</b>,
              <b> Nzoia Sugar Company Ltd</b>, <b>South Nyanza Sugar Company</b>
              ,<b> Mumias Sugar</b>, <b>Nairobi Bottlers</b>, and
              <b> Unilever Kenya</b>. We have fully equipped offices to meet all
              industry challenges.
            </p>
          </div>
          <div className="img">
            <img src="/images/lady.webp" alt="A female pneumatic engineer" />
            <div className="shape"></div>
          </div>
        </div>
        <section>
          <h2>WHY CHOOSE US ?</h2>
          <div className="wrap">
            <div className="cards">
              <FaTools className="icons" />
              <h3>Quality Assurance</h3>
              <p>
                We provide top-quality tools and reliable backup services to
                ensure uninterrupted operations for industries across Kenya. Our
                commitment to excellence guarantees the highest standards in
                every product and service we offer.
              </p>
            </div>
            <div className="cards">
              <FaLightbulb className="icons" />
              <h3>Technology Advisory</h3>
              <p>
                Our expert team offers comprehensive assessments and advisory
                services on the impact of emerging technologies. We help you
                stay ahead, leveraging new technologies to drive innovation and
                efficiency in your operations.
              </p>
            </div>
            <div className="cards">
              <FaThumbsUp className="icons" />
              <h3>Customer Satisfaction</h3>
              <p>
                We are dedicated to achieving the highest level of customer
                satisfaction. Our customer-centric approach ensures that we meet
                and exceed your expectations, delivering exceptional value and
                service every time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
