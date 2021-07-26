import logo from "../../assets/paystack-logo.svg";
import ng from "../../assets/ng.svg";
import WhyChoose from "../../assets/why_choose_paystack_db.svg";
import SuccessRate from "../../assets/success_rates_db.svg";
import Demo from "../../assets/demo_db.svg";
import Blog from "../../assets/blog_db.svg";
import Guides from "../../assets/guides_db.svg";
import VideoTuts from "../../assets/tutorials_db.svg";
import Decode from "../../assets/decode_fintech_db.svg";
import GH from "../../assets/gh.svg";
import ZA from "../../assets/za.svg";
import PSIcon from "../../assets/paystack-icon.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* nav left */}
      <ul className="nav_left">
        <li className="logo">
          <a href="#">
            <img src={logo} alt="paystack logo" />
          </a>
        </li>
        <li>
          <a href="#">
            Why Paystack <i className="fas fa-caret-down"></i>
          </a>
          <ul className="dropdown dd_left animate__animated animate__fadeInUp animate__faster">
            <li>
              <div>
                <ul>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={WhyChoose} />
                        </div>
                        <div className="item-text">
                          <h1>Why Choose Paystack</h1>
                          <p>
                            Over 60,000 businesses trust Paystack. Here’s why.
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={SuccessRate} />
                        </div>
                        <div className="item-text">
                          <h1>Success Rates</h1>
                          <p>
                            Get the best transaction success rates in the
                            industry
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Demo} />
                        </div>
                        <div className="item-text">
                          <h1>Demo</h1>
                          <p>
                            See the Paystack Checkout Form and Dashboard in
                            action
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <div className="paystack-for">
                  <p>YOUR GROWTH STAGE</p>
                  <ul>
                    <li>
                      <a href="#">
                        <h2>For Entrepreneurs</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Corporates</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Global Brands</h2>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="paystack-for">
                  <p>OUR BUSINESS TYPE</p>
                  <ul>
                    <li>
                      <a href="#">
                        <h2>For Fintechs</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Schools</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Betting</h2>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">
            Learn <i className="fas fa-caret-down"></i>
          </a>
          <ul className="dropdown dd_left animate__animated animate__fadeInUp animate__faster">
            <li>
              <div>
                <ul>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Blog} />
                        </div>
                        <div className="item-text">
                          <h1>Blog</h1>
                          <p>
                            Original lessons about making the internet work for
                            your business
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Guides} />
                        </div>
                        <div className="item-text">
                          <h1>Guides</h1>
                          <p>
                            Big ideas in payments, explained in simple English
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={VideoTuts} />
                        </div>
                        <div className="item-text">
                          <h1>Video Tutorials</h1>
                          <p>Quick video tutorials on how to use Paystack</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Decode} />
                        </div>
                        <div className="item-text">
                          <h1>Decode Fintech</h1>
                          <p>
                            The trade email newsletter and podcast for leaders
                            in African fintech
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <div className="paystack-for">
                  <p>COMPANY</p>
                  <ul>
                    <li>
                      <a href="#">
                        <h2>About Us</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Compliance</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Careers</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Brand</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Media Kit</h2>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      {/* nav right */}
      <ul className="nav_right">
        <li>
          <a href="#">
            Developers <i className="fas fa-caret-down"></i>
          </a>
          <ul className="dropdown dd_right animate__animated animate__fadeInUp animate__faster">
            <li>
              <ul>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Status Page</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Support <i className="fas fa-caret-down"></i>
          </a>
          <ul className="dropdown dd_right animate__animated animate__fadeInUp animate__faster">
            <li>
              <ul>
                <li>
                  <a href="#">Quick Help</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Why was I debited?</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#" className="btn-lg">
            Create free account
          </a>
        </li>
        <li>
          <a href="#">
            <img src={ng} alt="nigeria logo" />
          </a>
          <ul className=" flags dropdown dd_right animate__animated animate__fadeInUp animate__faster">
            <li>
              <ul>
                <li>
                  <a href="#">
                    <img src={GH} alt="ghana" />
                    Ghana
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ZA} alt="south africa" />
                    South Africa
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={PSIcon} alt="paystack icon" />
                    Others
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
