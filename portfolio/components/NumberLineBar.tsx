import React from 'react'

const NumberLineBar = () => {
  return (
    <div>
      {
        [...Array(100).fill(0)].map((count: number, index: number) => {
            return <p key={index}>{index + 1}</p>
        })
      }
    </div>
  )
}

export default NumberLineBar
