import React, { useState } from "react";
import style from "./Header.module.css";
import Cars from "./CarsModel";
import {
  MdSearch,
  MdVerifiedUser,
  MdNotificationImportant,
  MdSettingsSuggest,
  MdPersonPin,
  MdFavoriteBorder,
  MdLocalGasStation,
  MdSupport,
  MdSupervisedUserCircle,
} from "react-icons/md";
import CardWelcome from "./CardWelcome";
import SubHeaderCombine from "./body/SubHeaderCombine";
// import { Link } from "react-router-dom";
import Carwrap from "./Carwrap";
import BottomNav from "./BottomNav";
import Footer from "./FooterPage/Footer";
import { FcLike } from "react-icons/fc";

const Header = (props) => {
  const [likes, setLikes] = useState({});

  const myLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };
  return (
    <div className={style.headwrap}>
      <div className={style.head}>
        <div>
          <h2 className={style.logo}>MONIRENT</h2>
        </div>

        <div className={style.search}>
          <MdSearch className={style.iconleft} />
          <input
            type="search"
            placeholder="Search something here"
            className={style.field}
          />
        </div>

        <div className={style.icons}>
          <div>
            <MdVerifiedUser className={style.icon} />
          </div>
          <div>
            <MdNotificationImportant className={style.icon} />
          </div>
          <div>
            <MdSettingsSuggest className={style.icon} />
          </div>
          <div>
            <MdPersonPin className={style.icon} />
          </div>
        </div>
      </div>
      <div className={style.wrap}>
        <div className={style.rentme}>
          <CardWelcome />
          <SubHeaderCombine />
        </div>

        <div className={style.contentheader}>
          <div className={style.contpopular}>
            <h5>Popular Car</h5>
          </div>

          <div className={style.contview}>
            <h5>
              <a>View all</a>
            </h5>
          </div>
        </div>

        {/* /**-----------------Main Content here------------ */}
        <Carwrap>
          {Cars.map((car, id) => {
            return (
              <div className={style.contmain}>
                <div className={style.contsub}>
                  <div className={style.subone}>
                    <div className={style.subonea} key={id}>
                      <h5>{car.name}</h5>
                      <h5 className={style.subtext}>{car.type}</h5>
                    </div>

                    <div className={style.suboneb} onClick={() => myLike(id)}>
                      {likes[id] ? (
                        <FcLike className={style.favorite} />
                        ) : (
                        <MdFavoriteBorder className={style.favorite} />
                      )}
                    </div>
                  </div>

                  <div className={style.subtwo}>
                    <img src={car.image} />
                  </div>

                  <div className={style.subthree}>
                    <div>
                      <span className={style.conticon}>
                        <MdLocalGasStation />
                      </span>
                      <span>{car.litre}L</span>
                    </div>

                    <div>
                      <span className={style.conticon}>
                        <MdSupport />
                      </span>
                      <span>{car.version}</span>
                    </div>

                    <div>
                      <span className={style.conticon}>
                        <MdSupervisedUserCircle className={style.removeme} />
                      </span>
                      <span>{car.capacity} People</span>
                    </div>
                  </div>

                  <div className={style.subfour}>
                    <div className={style.subfoura}>
                      <span className={style.textbold}>${car.amount}.00/</span>
                      <span className={style.subtext}>day</span>
                    </div>

                    <div className={style.subfourb}>
                      <button className={style.sub_btn}>Rent Me</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carwrap>
      </div>

      <BottomNav />
      <Footer />
    </div>
  );
};

export default Header;
