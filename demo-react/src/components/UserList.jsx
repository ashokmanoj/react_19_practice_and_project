import React from 'react'

const UserList = (props) => {


  return (
    <div>UserList
        <ul>
          <h1>Name : {props.name}</h1>
          <h1>Age : {props.age}</h1>
          <h1>Email : {props.email}</h1>
        </ul>
    </div>
  )
}

export default UserList