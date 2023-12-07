import React from 'react'

function HeadingComponent(props) {
  return (
<>
<div className={`hero-title text-${props.color}`}>
    <h1>{props.title}</h1>
    <div className="line"></div>
</div>
</>
  )
}

export default HeadingComponent