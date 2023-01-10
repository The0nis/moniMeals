import React from "react";
import { MdStar } from "react-icons/md";
import styles from "./detailStyle.module.css";

const Reviews = (props) => {
  return (
    <div className={styles.client_wrapper}>
      <div className={styles.client_sectiona}>
        <div className={styles.client_image}>
          <img src={props.imaged} alt="user profile" />
        </div>

        <div className={styles.client_detail}>
          <h4>{props.name}</h4>
          <h5>{props.title}</h5>
        </div>

        <div className={styles.client_date_rate}>
          <h4>{props.date}</h4>
          <div className={styles.star_wrap}>
            <MdStar className={styles.star_icon} />
            <MdStar className={styles.star_icon} />
            <MdStar className={styles.star_icon} />
            <MdStar className={styles.star_icon} />
            <MdStar className={styles.star_icon_change} />
          </div>
        </div>
      </div>

      <div className={styles.client_feedback}>
        <p>{props.feedback}</p>
      </div>
      <hr className={styles.lines}/>
    </div>
  );
};

export default Reviews;
