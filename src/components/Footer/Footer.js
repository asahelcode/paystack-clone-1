import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-top">
        <ul data-aos="fade-up" data-aos-delay="300">
          <li>
            <h2>Why Paystack</h2>
          </li>
          <li>
            <a href="#">Why Choose Paystack</a>
          </li>
          <li>
            <a href="#">Success Rates</a>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">For Entrepreneurs</a>
              </li>
              <li>
                <a href="#">For Corporates</a>
              </li>
              <li>
                <a href="#">For International Companies</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">For Fintechs</a>
              </li>
              <li>
                <a href="#">For Schools</a>
              </li>
              <li>
                <a href="#">For Betting</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul data-aos="fade-up" data-aos-delay="400">
          <li>
            <h2>Pricing</h2>
          </li>
          <li>
            <a href="#">Nigeria</a>
          </li>
          <li>
            <a href="#">Ghana</a>
          </li>
          <li>
            <a href="#">South Africa</a>
          </li>
          <li>
            <ul>
              <li>
                <h2>Customers</h2>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Learn</h2>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Video Tutorials</a>
              </li>
              <li>
                <a href="#">Decode Fintech</a>
              </li>
              <li>
                <a href="#">Commerce</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul data-aos="fade-up" data-aos-delay="500">
          <li>
            <h2>Developers</h2>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Status Page</a>
          </li>
          <li>
            <ul>
              <li>
                <h2>Community</h2>
              </li>
              <li>
                <a href="#">Nigeria Logos</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Support</h2>
              </li>
              <li>
                <a href="#">Help Desk</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Why Was I Debited?</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul data-aos="fade-up" data-aos-delay="600">
          <li>
            <h2>About</h2>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Compliance</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Media Kit</a>
          </li>
          <li>
            <a href="#">Privacy & Terms</a>
          </li>
        </ul>
      </section>
      <div className="divider"></div>
      <section className="footer-bottom">
        <ul data-aos="fade-up" data-aos-delay="300">
          <li>
            <h2>Contact</h2>
          </li>
          <li className="email">
            <a href="#">hello@paystack.com</a>
          </li>
          <li className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube-square"></i>
            </a>
          </li>
        </ul>
        <ul data-aos="fade-up" data-aos-delay="400">
          <li>
            <h2>Lagos</h2>
          </li>
          <li>
            <p>
              126 Joel Ogunnaike Street,
              <br /> Ikeja GRA, Ikeja,
              <br /> Lagos, Nigeria.
            </p>
          </li>
          <ul>
            <li>
              <h2>Accra</h2>
            </li>
            <li>
              <p>
                AfricaWorks,
                <br /> 35 Patrice Lumumba Road, <br />
                Airport Residential Area,
                <br />
                Accra, Ghana.
              </p>
            </li>
          </ul>
        </ul>
        <ul data-aos="fade-up" data-aos-delay="500">
          <li>
            <h2>San Francisco</h2>
          </li>
          <li>
            <p>
              510 Townsend Street,
              <br /> San Francisco, <br />
              CA 94103 <br />
              United States.
            </p>
          </li>
        </ul>
        <ul data-aos="fade-up" data-aos-delay="600">
          <li>
            <h2>South Africa</h2>
          </li>
          <li>
            <p>
              45 Kingfisher Dr <br />
              Fourways
              <br /> Sandton, 2055 <br />
              South Africa.
            </p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
