// import React from 'react'

const Form = () => {

    // type FormData = {
    //     name: string,
    //     email: string,
    //     password: string
    // }

    const formAction = (formData:any)=>{
        const userData ={
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(userData);
    }

  return (
    <form action={formAction}>
        <label htmlFor="firstName">Name</label>
      <input type="text" placeholder='Name' name="name"/>

      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Last Name' name="email" />

      <label htmlFor="password"> Password</label>
      <input type="password" name="password" id="" />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form