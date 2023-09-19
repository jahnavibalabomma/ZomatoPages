import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { LiaAngleDownSolid } from "react-icons/lia";
import { VscGlobe } from "react-icons/vsc";
import {
  FaSquareInstagram,
  FaSquareYoutube,
  FaFacebook,
} from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="footerpage">
      <div className="mainFooter">
        <div className="topFooter">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt=""
          />
          <div>
            <p className="footbox">
              India <LiaAngleDownSolid size={12}></LiaAngleDownSolid>
            </p>

            <p className="footbox">
              <VscGlobe size={20}></VscGlobe>
              English <LiaAngleDownSolid size={12}></LiaAngleDownSolid>
            </p>
          </div>
        </div>
        <div className="footermatter">
          <ul type="none">
            <h5>ABOUT ZOMATO</h5>
            <li>
              <a href="">Who We Are</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Work With Us</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Report Fraud</a>
            </li>
            <li>
              <a href="">Press Kit</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul type="none">
            <h5>ZOMAVERSE</h5>
            <li>
              <a href="">Zomato</a>
            </li>
            <li>
              <a href="">Blinkit</a>
            </li>
            <li>
              <a href="">Feeding India</a>
            </li>
            <li>
              <a href="">Hyperpure</a>
            </li>
            <li>
              <a href="">Zomaland</a>
            </li>
          </ul>
          <ul type="none">
            <ul type="none">
              <h5>FOR RESTAURANTS</h5>
              <li>
                <a href="">Partner With Us</a>
              </li>
              <li>
                <a href="">Apps For You</a>
              </li>
            </ul>
            <ul type="none">
              <h5>FOR ENTERPRISES</h5>
              <li>
                <a href="">Zomato For Enterprise</a>
              </li>
            </ul>
          </ul>
          <ul type="none">
            <h5>LEARN MORE</h5>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Security</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
          </ul>
          <ul>
            <h5>SOCIAL LINKS</h5>
            <div className="iconS">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in">
                  <BsLinkedin size={20}></BsLinkedin>
                </a>
                <a href="https://www.instagram.com/zomato/">
                  <FaSquareInstagram size={21}></FaSquareInstagram>
                </a>
                <a href="https://twitter.com/zomato">
                  <AiFillTwitterCircle size={22}></AiFillTwitterCircle>
                </a>
                <a href="https://www.youtube.com/zomato">
                  <FaSquareYoutube size={21}></FaSquareYoutube>
                </a>
                <a href="https://www.facebook.com/zomato">
                  <FaFacebook size={20}></FaFacebook>
                </a>
              </IconContext.Provider>
            </div>
            <div>
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt=""
              />
            </div>
          </ul>
        </div>
        <hr></hr>
        <div style={{ color: " gray", fontSize: "small" }}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
