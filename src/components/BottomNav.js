import React from 'react'
import style from './BottomNav.module.css';

const BottomNav = () => {
  return (
    <div className={style.header}>

        <div className={style.btn}>
            <button>Show More Car</button>
        </div>

        <div className={style.headertxt}>
            120 Car
        </div>

    </div>
  )
}

export default BottomNav