// import React from 'react'
import { AdminList } from "../types/type"

const AdminInfo = () => {
    const data = AdminList;
  return (
    <div>
        AdminInfo
        <ul>
            {
                data.map((admin) => (<div key={admin.id}>
                    <li >{admin.name}</li>
                    <li >{admin.email}</li>
                    <li >{admin.role}</li>
                </div>
                    
                    ))
            }
        </ul>
    </div>
  )
}

export default AdminInfo