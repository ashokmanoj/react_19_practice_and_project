import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  address: string;
};

const UserData = () => {
  const [data, setData] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "4kM5T@example.com",
    role: "user",
    address: "123 Main St",
  });
  return (
    <div>
      UserData
      <ul
        key={data.id}
        style={{
          listStyle: "none",
          padding: 50,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <li>Name : {data.name}</li>
        <li>Email : {data.email}</li>
        <li>Role : {data.role}</li>
        <li style={{ marginBottom: 10 }}>Address : {data.address}</li>
        <button
          onClick={() =>
            setData({
              id: 2,
              name: "John Doe",
              email: "4kM5T@example.com",
              role: "new User",
              address: "123 Main St",
            })
          }
        >
          Update
        </button>
      </ul>
    </div>
  );
};

export default UserData;
