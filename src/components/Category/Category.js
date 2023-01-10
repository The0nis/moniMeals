import React, { useState } from "react";
import classes from "./Category.module.css";
import style from "../Header.module.css";
import Cars from "../CarsModel";
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
import SubHeaderCombine from "./SubHeaders/body/CategorySubHeaderCombine";
// import { Link } from "react-router-dom";
import BottomNav from "./CategoryBottomNav";
import Footer from "./SubHeaders/FooterPage/CategoryFooter";
import CategoryWrap from "./CategoryWrap";

import { FcLike } from "react-icons/fc";

const Category = () => {
  const [likes, setLikes] = useState({});

  const myLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };
  const type = [
    {
      id: "m1",
      name: "Sport",
      value: "10",
    },
    {
      id: "m2",
      name: "SUV",
      value: "12",
    },
    {
      id: "m3",
      name: "MPV",
      value: "16",
    },
    {
      id: "m4",
      name: "Sedan",
      value: "20",
    },
    {
      id: "m5",
      name: "Coupe",
      value: "14",
    },
    {
      id: "m6",
      name: "Hatchback",
      value: "14",
    },
  ];

  const capacity = [
    {
      id: "c1",
      number: "2",
      value: "10",
    },
    {
      id: "c2",
      number: "4",
      value: "14",
    },
    {
      id: "c3",
      number: "6",
      value: "12",
    },
    {
      id: "c4",
      number: "8",
      value: "16",
    },
  ];

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


      <div className={classes.bodywrapper}>
        <div className={classes.rightnav}>
          <div className={classes.rightwrapper}>

        <div className={classes.typewrapper}>
            <h5>TYPE</h5>
            {type.map((pick, id) => {
              return (
                <div key={id} className={classes.typecont}>
                  {/* <button type="radio" className={classes.typebtn} /> */}
                  <input type='radio' />
                  <span className={classes.name}>{pick.name} </span>
                  <span className={classes.value}>({pick.value})</span>
                </div>
              );
            })}
          </div>

          <div className={classes.capacitywrapper}>
            <h5>CAPACITY</h5>
            {capacity.map((caps, idx) => {
              return (
                <div key={idx} className={classes.capacitycont}>
                  <input type='radio' />
                  <span className={classes.name}>{caps.number} People </span>
                  <span className={classes.value}>({caps.value})</span>
                </div>
              );
            })}
          </div>
          </div>

         
        </div>

        <div className={classes.wrap}>
          <div className={classes.rentme}>
            <SubHeaderCombine />
          </div>

          <div className={classes.contentheader}>
            <div className={style.contpopular}>
              <h5>Popular Car</h5>
            </div>

            <div className={classes.contview}>
              <h5>
                <a>View all</a>
              </h5>
            </div>
          </div>

          {/* /**-----------------Main Content here------------ */}
          <CategoryWrap>
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
                      <img src={car.image} alt="a big part" />
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
                        <span className={style.textbold}>
                          ${car.amount}.00/
                        </span>
                        <span className={style.subtext}>day</span>
                      </div>

                      <div className={style.subfourb}>
                        <button>Rent Me</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CategoryWrap>
        </div>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Category;
