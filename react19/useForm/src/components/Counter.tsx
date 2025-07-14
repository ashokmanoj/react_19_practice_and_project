// import React from 'react'
import { useActionState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function increament(predata: any, formData: any) {
  console.log(formData.get("name")); //formData.get('name')
  return predata + 1;
}

const Counter = () => {
  const [state, FormAction] = useActionState(increament, 0);
  return (
    <form action="">
      <h1>{state}</h1>
      <button type="submit" formAction={FormAction}>
        Increament
      </button>
      <br />
      <input type="text" name="name" id="name" />
    </form>
  );
};

export default Counter;
