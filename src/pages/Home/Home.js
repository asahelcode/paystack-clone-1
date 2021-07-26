import "./Home.css";
import Dominos from "../../assets/Dominos-Plain.svg";
import MTN from "../../assets/MTN-Plain.svg";
import Bolt from "../../assets/Bolt.svg";
import AXA from "../../assets/AXA.svg";
import CollectPmt from "../../assets/Collect-Payments-for-Multiple-Channels-1.1.gif";
import RobustSuite from "../../assets/Robust-Suite-of-APIs-Opt.png";
import FraudDetect from "../../assets/Advanced-Fraud-Protection.mp4";
import ForIntlBiz from "../../assets/For-International-Businesses_180823_165939.svg";
import ForEntr from "../../assets/For-Entrepreneurs_180823_165709.svg";
import ForLargeCorp from "../../assets/For-Large-Corporations_180823_165502.svg";
import AirPeace from "../../assets/Air-Peace-Stack-Blue_200305_154114.svg";
import FilmHouse from "../../assets/FilmHouse-Stack-Blue_200304_153641.svg";
import Piggyvest from "../../assets/Piggyvest-Stack-Blue_200304_153734.svg";
import IbomAir from "../../assets/Ibom-Air-Stack-Blue_200304_154259.svg";
import Kuda from "../../assets/kuda-Stack-Blue_200304_154345.svg";
import Ariiya from "../../assets/Ariiya-Stack-Blue_200304_155307.svg";
import LagosIntRev from "../../assets/Lagos-Internal-Revenue-Service.svg";
import Betway from "../../assets/Betway-Plain.svg";
import Carbon from "../../assets/carbon-dark.svg";
import ASU from "../../assets/Abia-State-University.svg";
import GIGM from "../../assets/GIGM-Plain_180827_172142.svg";
import IrokoTV from "../../assets/IrokoTV-Plain.svg";
import Smile from "../../assets/Smile-Plain_180827_172218.svg";
import Cowrywise from "../../assets/Cowrywise-dark.svg";
import Stripe from "../../assets/Stripe-Logo-blue.png";
import Visa from "../../assets/visa-logo.png";
import YC from "../../assets/ycombinator-logo.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <section className="intro">
        <div className="intro-main animate__animated animate__backInLeft">
          <h1>Modern online and offline payments for Africa</h1>
          <p>
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <a href="#" className="btn-lg">
            Create free account
          </a>
        </div>
        <div className="intro-bottom">
          <div className="intro-bottom-a">
            <p>Trusted by over 60,000 businesses</p>
            <div className="intro-bottom-a-logos">
              <img src={Dominos} alt="Dominos Logo" />

              <img src={MTN} alt="MTN Logo" id="mtn" />

              <img src={Bolt} alt="Bolt Logo" id="bolt" />

              <img src={AXA} alt="AXA Logo" id="axa" />
            </div>
          </div>
          <div className="intro-bottom-b">
            <div className="intro-bottom-b-text">
              Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss
              working with Paystack
            </div>
            <div className="play-btn">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div
          className="features-text"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h1>Simple, easy payments</h1>
          <p>Building a business is hard. Getting paid shouldn't be.</p>
        </div>
        {/* delight customers */}
        <div className="features-content">
          <div
            className="features-content-media"
            data-aos="fade-right"
            data-aos-delay="320"
          >
            <img src={CollectPmt} alt="Collect Payment" />
          </div>
          <div
            className="features-content-text"
            data-aos="fade-left"
            data-aos-delay="340"
          >
            <h1>Delight customers with a seamless payments experience</h1>
            <p>
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate Paystack once and let your customers pay you
              however they want.
            </p>
            <ul className="list">
              <li>
                <i class="fas fa-check"></i> Card
              </li>
              <li>
                <i class="fas fa-check"></i> Visa QR
              </li>
              <li>
                <i class="fas fa-check"></i> Bank Account
              </li>
              <li>
                <i class="fas fa-check"></i> Mobile Money
              </li>
              <li>
                <i class="fas fa-check"></i> Bank Transfer
              </li>
              <li>
                <i class="fas fa-check"></i> POS (coming soon)
              </li>
              <li>
                <i class="fas fa-check"></i> USSD
              </li>
            </ul>
            <h1>Enjoy phenomenal transaction success rates</h1>
            <p>
              We automatically route payments through the most optimal channels,
              ensuring the highest transaction success rates in the market.
            </p>
            <a href="#" className="link-green">
              <div className="link-green-content">
                <div className="caret-circle">
                  <i class="fas fa-angle-right"></i>
                </div>
                <div className="link-green-text">
                  Find out how we achieve high success rates
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* build custom payment */}
        <div className="features-content">
          <div
            className="features-content-media"
            data-aos="fade-left"
            data-aos-delay="320"
          >
            <img src={RobustSuite} alt="Robust suite of APIs" />
          </div>
          <div
            className="features-content-text"
            data-aos="fade-right"
            data-aos-delay="340"
          >
            <h1>Build custom payments experiences with well-documented APIs</h1>
            <p>
              Developers love our thorough, well-documented APIs that let you to
              build everything from simple weekend projects, to complex
              financial products serving hundreds of thousands of customers. If
              you can imagine it, you can build it with Paystack.
            </p>
            <ul className="list b">
              <li>
                <i class="fas fa-check"></i> Collect one-time and recurring
                payments from your app or website
              </li>
              <li>
                <i class="fas fa-check"></i> Make instant transfers
              </li>
              <li>
                <i class="fas fa-check"></i> Retrieve all your transaction and
                customer data
              </li>
              <li>
                <i class="fas fa-check"></i> Verify the identity of customers
              </li>
            </ul>
            <a href="#" className="link-green">
              <div className="link-green-content">
                <div className="caret-circle">
                  <i class="fas fa-angle-right"></i>
                </div>
                <div className="link-green-text">Paystack API Quickstart</div>
              </div>
            </a>
          </div>
        </div>
        {/* protect yourself */}
        <div className="features-content">
          <div
            className="features-content-media"
            data-aos="fade-right"
            data-aos-delay="320"
          >
            <video src={FraudDetect} autoPlay="true" loop="true"></video>
          </div>
          <div
            className="features-content-text"
            data-aos="fade-left"
            data-aos-delay="340"
          >
            <h1>
              Protect yourself and your customers with advanced fraud detection
            </h1>
            <p>
              Paystack’s combination of automated and manual fraud systems
              protect you from fraudulent transactions and associated chargeback
              claims.
            </p>

            <h1>
              Detailed reporting for accounting, reconciliation, and audits
            </h1>
            <p>
              Understand your customers’ purchase patterns and do easy
              reconciliations with a robust data Dashboard and easy exports.
            </p>
          </div>
        </div>
      </section>
      <section className="trusted">
        <div className="trusted-content">
          <h1 data-aos="fade-right" data-aos-delay="340">
            Trusted by 60,000+ businesses
          </h1>
          <p data-aos="fade-right" data-aos-delay="340">
            Thousands of organizations of all sizes trust Paystack to grow their
            business.
          </p>
          <div className="trusted-cards">
            <div data-aos="fade-up" data-aos-delay="300">
              <img src={ForIntlBiz} alt="for intl business" />
              <h1>Paystack for Global Brands</h1>
              <p>We help global brands accept payments from across Africa</p>
              <a href="#" className="learnmore">
                <div className="caret-circle">
                  <i class="fas fa-angle-right"></i>
                </div>
                <span>Learn More</span>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src={ForEntr} alt="for intl business" />
              <h1>Paystack for Entrepreneurs</h1>
              <p>
                From startup to scale-up, we can support you at every stage of
                your businesses’ growth
              </p>
              <a href="#" className="learnmore">
                <div className="caret-circle">
                  <i class="fas fa-angle-right"></i>
                </div>
                <span>Learn More</span>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src={ForLargeCorp} alt="for intl business" />
              <h1>Paystack for Large Organizations</h1>
              <p>
                Paystack helps many of the largest corporate and government
                organizations in Nigeria get paid quickly and securely.
              </p>
              <a href="#" className="learnmore">
                <div className="caret-circle">
                  <i class="fas fa-angle-right"></i>
                </div>
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="powering">
        <div className="powering-text">
          <h1 data-aos="fade-right" data-aos-delay="340">
            Powering growth for amazing businesses
          </h1>
          <p data-aos="fade-right" data-aos-delay="340">
            Paystack is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
          </p>
        </div>
        <div
          className="powering-logos"
          data-aos="fade-right"
          data-aos-delay="410"
        >
          <img src={AirPeace} alt="air peace" />
          <img src={FilmHouse} alt="film house" id="fh" />
          <img src={Piggyvest} alt="piggyvest" />
          <img src={IbomAir} alt="ibom air" id="iair" />
          <img src={Kuda} alt="kuda" />
          <img src={Ariiya} alt="ariiya" id="ar" />
          <img src={Dominos} alt="dominos" />
          <img src={MTN} alt="MTN" id="mtn" />
          <img src={LagosIntRev} alt="lagos internal revenue" />
          <img src={Bolt} alt="bolt" id="bolt" />
          <img src={Betway} alt="betway" id="bw" />
          <img src={Carbon} alt="carbon" />
          <img src={AXA} alt="axa mansard" />
          <img src={ASU} alt="abia state university" />
          <img src={GIGM} alt="GIGM" id="gigm" />
          <img src={IrokoTV} alt="iroko tv" id="iroko" />
          <img src={Smile} alt="smile" id="smile" />
          <img src={Cowrywise} alt="cowrywise" />
        </div>
      </section>
      <section className="backedby">
        <div className="backedby-content">
          <div className="backedby-text">
            <h1 data-aos="fade-right" data-aos-delay="340">
              Backed by strong global partners
            </h1>
            <p data-aos="fade-right" data-aos-delay="340">
              Paystack is backed by notable investors as well as some of the
              best payments companies on the planet.
            </p>
          </div>
          <div className="backedby-cards">
            <div data-aos="fade-up" data-aos-delay="300">
              <img src={Stripe} alt="stripe" />
              <p>
                Paystack is highly technical and fanatically customer oriented.
                We’re excited to back such people in one of the world’s
                fastest-growing regions.
              </p>
              <div className="person">
                <div className="person-image patrick"></div>
                <div className="person-text">
                  <h2>Patrick Collison</h2>
                  <p>CEO, Stripe</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src={Visa} alt="visa" />
              <p>
                Our investment in Paystack aligns with the kind of investments
                we look for - those that will help extend our reach into the
                global commerce ecosystem
              </p>
              <div className="person">
                <div className="person-image otto"></div>
                <div className="person-text">
                  <h2>Otto Williams</h2>
                  <p>
                    Head of Strategic Partnerships, Fintech & Ventures CEMEA,
                    Visa
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src={YC} alt="ycombinator" id="yc" />
              <p>
                As YC's first Nigerian startup Paystack leads the charge of
                great companies coming out of Africa, powering modern payments
                for an entire continent.
              </p>
              <div className="person">
                <div className="person-image michael"></div>
                <div className="person-text">
                  <h2>Michael Seibel</h2>
                  <p>CEO, Partner, Y Combinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="try">
        <div className="try-content">
          <div className="try-left" data-aos="fade-right" data-aos-delay="300">
            <p>Try Paystack Now</p>
            <h1>Start accepting payments in just 30 minutes</h1>
          </div>
          <div className="try-right" data-aos="fade-left" data-aos-delay="400">
            <a href="#" className="btn-lg lgr">
              Create free account
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
