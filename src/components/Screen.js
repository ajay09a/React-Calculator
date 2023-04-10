import React from 'react'

const Screen = ({value}) => {
  return (
        <div className='screen'>
          <div className='input'>
            {value}
          </div>
        </div>
  )
}

export default Screen