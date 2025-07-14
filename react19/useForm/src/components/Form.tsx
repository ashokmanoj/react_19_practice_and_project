import FormButton from "./FormButton"


const Form = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addUser = async(formData:any) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const user = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        console.log(user);
    }
  return (
    <form action={addUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br/>
        <FormButton/>
    </form>
  )
}

export default Form