import React from 'react'

const BottleList = ({ propbottles }) => {
  return (
    <>
    {propbottles &&
        propbottles.map((bottles) => (
          <div key={bottles._id} className="card mb-3">
            {bottles.bottleText}
          </div>
        ))}
    </>
  )
}

export default BottleList;