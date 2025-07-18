import React, { useId } from "react";

const UniqueId = () => {
  const id = useId();
  return (
    <div>
      UniqueId<br></br>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />\<br />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}-password`} />
    </div>
  );
};

export default UniqueId;
