import React from "react";
import style from "./CategoryFooter.module.css";

const Footer = () => {
  return (
    <div className={style.footerwrapper}>
      <div className={style.header}>
        <div className={style.sectiona}>
          <div className={style.logosec}>
            <h3>MONIRENT</h3>
            <p>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          <div className={style.footerabout}>
            <div className={style.contsec}>
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Featured</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Bussiness Relation</a>
                </li>
              </ul>
            </div>

            <div className={style.contsec}>
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Podcast</a>
                </li>
                <li>
                  <a href="#">Invite a Friend</a>
                </li>
              </ul>
            </div>

            <div className={style.contsec}>
              <h3>Socials</h3>
              <ul>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.secttwo}>
          <div className={style.secyear}>
            <p>©2022 MORENT. All rights reserved</p>
          </div>

          <div className={style.secsubs}>
            <p>Privacy & Policy</p>
          </div>

          <div className={style.secsub}>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
