import React from 'react'
import style from './Wrapper.css'

const Wrapper = (props) => {
  return (
    <div className={style.wrap}>
     {props.children}
    </div>
  )
}

export default Wrapper