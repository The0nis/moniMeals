import React from 'react'
import style from './CategoryWrap.module.css'

const CategoryWrap = (props) => {
  return (
    <div className={style.Categorywrapper}>
        {props.children}
    </div>
  )
}

export default CategoryWrap