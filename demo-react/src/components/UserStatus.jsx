import React from 'react'

const UserStatus = ({loggendIn, isAdmin}) => {
  return (
    <div>
        {loggendIn && isAdmin ? 'You are an admin' : 'You are not an admin'}
      {/* <p>loggendIn: {loggendIn ? 'true' : 'false'}</p>
      <p>isAdmin: {isAdmin ? 'true' : 'false'}</p> */}
    </div>
  )
    
}

export default UserStatus