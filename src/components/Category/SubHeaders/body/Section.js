import React from 'react'
import style from './CategorySubHeader.module.css'

const Section = () => {
    const country = [
        {
            id: 1,
            name:  "Select your city" 
        },

        {
            id: 2,
            name:  "Ibom" 
        },

        {
            id: 3,
            name:  "Oyo" 
        },

        {
            id: 4,
            name:  "Oshogbo"
        },

        {
            id: 5,
            name:  "Edo"
        },

        {
            id: 6,
            name:  "Lagos"
        },

        {
            id: 7,
            name:  "Ekiti"
        },

        {
            id: 8,
            name:  "Abuja"
        },

        {
            id: 9,
            name:  "Niger"
        },

        {
            id: 10,
            name:  "Ogun"
        },

        {
            id: 11,
            name:  "Abeokuta"
        }
    ]
    
  return (
    <select className={style.select}>
        {country.map((item, id) => {
            return (
            <option key='id'>{item.name}</option>
        );
        })}
    </select>
)
}

export default Section