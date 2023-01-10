import React from 'react'
import style from './Carwrap.module.css'

const Carwrap = (props) => {
  return (
    <div className={style.wrapper}>
        {props.children}
    </div>
  )
}

export default Carwrap