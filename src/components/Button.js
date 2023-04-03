import React, { useState } from 'react'

const Button = ({value}) => {
    const [data, setdata] = useState('')
    const handleClick = ()=>{
        console.log(value)
    }
    
    return (
        <div>
            <button className='singleBtn' value={data} onClick={handleClick}>{value}</button>
        </div>
    )
}

export default Button