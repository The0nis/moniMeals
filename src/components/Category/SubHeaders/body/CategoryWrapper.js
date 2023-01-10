import React from 'react'
import style from './CategoryWrapper.css'

const Wrapper = (props) => {
  return (
    <div className={style.wrap}>
     {props.children}
    </div>
  )
}

export default Wrapper