import { UserList } from "../types/type"

const UserInfo = () => {
    const data = UserList;
  return (
    <div>UserInfo
        <ul>
            {
                data.map((user) => (<div key={user.id}>
                    <li >{user.name}</li>
                    <li >{user.email}</li>
                </div>
                    
                ))
            }
        </ul>
    </div>
  )
}

export default UserInfo