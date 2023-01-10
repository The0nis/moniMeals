import React from "react";
import style from "./CardWelcome.module.css";

const CardWelcome = () => {
  return (
    <div className={style.cardwrapper}>
      <div className={style.rental}>
        <div className={style.cardwrap}>
          <h2>The Best Platform for Car Rental</h2>
          <h4>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </h4>
          <button className={style.card_btn1}>Rental Car</button>
        </div>
      </div>

      <div className={style.renta2}>
        <div className={style.cardwrap}>
          <h2>Easy way to rent a car at a low price</h2>
          <h4>
            Providing cheap car rental services and safe and comfortable
            facilities.
          </h4>
          <button className={style.card_btn2}>Rental Car</button>
        </div>
      </div>
    </div>
  );
};

export default CardWelcome;


