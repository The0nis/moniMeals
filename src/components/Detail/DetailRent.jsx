import React, { useState } from "react";
import classes from "./DetailRent.module.css";
import style from "../Header.module.css";
import styles from "./detailStyle.module.css";
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
  MdStar,
} from "react-icons/md";
import SubHeaderCombine from "../Category/SubHeaders/body/CategorySubHeaderCombine";
// import { Link } from "react-router-dom";
import BottomNav from "../Category/CategoryBottomNav";
import Footer from "../Category/SubHeaders/FooterPage/CategoryFooter";
import CategoryWrap from "../Category/CategoryWrap";
import { FcLike } from "react-icons/fc";
import Detail from "./DetailList";
import Reviews from "./Reviews";
import reviews from "./ReviewList";

const DetailRent = ({ name, imaged, title, date, feedback }) => {
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
                    <input type="radio" />
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
                    <input type="radio" />
                    <span className={classes.name}>{caps.number} People </span>
                    <span className={classes.value}>({caps.value})</span>
                  </div>
                );
              })}
            </div>

            <div className={classes.range_wrap}>
              <h5>Price</h5>
              <input
                type="range"
                // onChange={changeHeight}
                min={1}
                max={100}
                step={1}
                // value={height}
                className={classes.slider_input}
              ></input>
              <p>Max. $100.00</p>
            </div>
          </div>
        </div>

        <div className={classes.wrap}>
          {/* <div className={classes.rentme}>
            <SubHeaderCombine />
          </div> */}
          <div className={styles.headwrap}>
            {Detail.map((item, idu) => {
              return (
                <div className={styles.car_detail}>
                  <div className={styles.detail_wrapper} key={idu}>
                    <div
                      className={styles.details_one}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                      }}
                    >
                      <div className={styles.detail_titles}>
                        <h4>{item.header}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className={styles.brand}>
                      <div
                        className={styles.brand_content}
                        // style={{
                        //   backgroundImage: `url(${item.sample})`,
                        //   backgroundSize: "contain",
                        //   backgroundRepeat: "no-repeat",
                        //   backgroundPosition: "center",
                        // }}
                      >
                        <img src={item.sample} alt="sample" />
                      </div>
                      <div
                        className={styles.brand_content}
                        // style={{
                        //   backgroundImage: `url(${item.samplea})`,
                        //   backgroundSize: "contain",
                        //   backgroundRepeat: "no-repeat",
                        //   backgroundPosition: "bottom",
                        // }}
                      >
                        <img src={item.samplea} alt="sample  a" />
                      </div>

                      <div
                        className={styles.brand_content}
                        // style={{
                        //   backgroundImage: `url(${item.sampleb})`,
                        //   backgroundSize: "contain",
                        //   backgroundRepeat: "no-repeat",
                        //   backgroundPosition: "bottom",
                        // }}
                      >
                        <img src={item.sampleb} alt="sample  b" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.detail_two}>
                    <div className={styles.header_wrap}>
                      <div>
                        <h4>{item.title}</h4>
                      </div>

                      <div>
                        <FcLike />
                      </div>
                    </div>
                    <div className={styles.star_wrapper}>
                      <div>
                        <MdStar className={styles.star_icon} />
                        <MdStar className={styles.star_icon} />
                        <MdStar className={styles.star_icon} />
                        <MdStar className={styles.star_icon} />
                        <MdStar className={styles.star_icon_change} />
                      </div>
                      <div className={styles.make_gray}>
                        {item.reviewers} Reviewers
                      </div>
                    </div>
                    <p className={styles.description}>{item.reviewcontent}</p>
                    <div className={styles.categories}>
                      <div>
                        <p>TypeCar</p>
                        <span>{item.type}</span>
                      </div>
                      <div>
                        <p>Capacity</p>
                        <span>{item.capacity} Person</span>
                      </div>
                      <div>
                        <p>Steering</p>
                        <span>{item.streering}</span>
                      </div>
                      <div>
                        <p>Gasoline</p>
                        <span>{item.gassoline}L</span>
                      </div>
                    </div>
                    <div className={styles.footer_wrap}>
                      <div className={styles.price}>
                        <h4>
                          ${item.price}/<span>days</span>
                        </h4>
                        <h6>${item.perday}</h6>
                      </div>

                      <div>
                        <button type="button" className={styles.btn}>
                          Rent Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.client_wrapper}>
              <div className={styles.client_review}>
                <h4>Reviews</h4>
                <span>13</span>
              </div>
              {reviews.map((client, ids) => {
                return (
                  <div className={styles.reviews_wrapper}>
                    <div className={styles.client_review}></div>
                    <Reviews
                      name={client.name}
                      imaged={client.passport}
                      title={client.title}
                      date={client.date}
                      feedback={client.feedback}
                      key={ids}
                    />
                  </div>
                );
              })}
              <div className={styles.more}>
                <p>Show All</p>
                <span>v</span>
              </div>
            </div>
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

export default DetailRent;
