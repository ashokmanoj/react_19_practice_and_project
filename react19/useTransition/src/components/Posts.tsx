// import React from 'react'

const Posts = () => {
const data = Array.from({length: 100000}, (_, i) => i + 1);

  return (
    <div>
        {data.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
    </div>
  )
}

export default Posts