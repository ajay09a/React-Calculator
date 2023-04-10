import React from 'react'

const Button = ({value, onClick}) => {
    
    
    return (
            <button className='singleBtn' value={value} onClick={onClick} >{value}</button>
    )
}

export default Button