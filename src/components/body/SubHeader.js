import React, {useState} from 'react'
import Section from './Section'
import style from './subHeader.module.css'
import Wrapper from '../Wrapper'

const SubHeader = (props) => {
  return (
    <Wrapper className={style.wrapper}>
        <div className={style.subHeader}>
            <div className={style.header}>
                <input type='radio'  name='choose' className={style.radbtn} />
                <label>{props.title}</label> 
            </div>

            <div className={style.subContent}>
                <div className={style.subs}>
                    <div>
                    <h3>Locations</h3>
                    </div>

                    <div >
                        <Section/>
                    </div>
                </div>

                <div className={style.subs}>
                    <div>
                        <h3>Date</h3>
                    </div>
                    <div className={style.nowdate}>
                        <input type='date' className={style.dateInput}  />
                    </div>
                </div>

                <div className={style.datenow}>
                    <div>
                        <h3>Time</h3>
                    </div>
                    <div className={style.nowTie}>
                        <input type='time' className={style.timeInput}  />
                    </div>
                </div>

            </div>

        </div>
    </Wrapper>
  )
}

export default SubHeader