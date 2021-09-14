import React, { useState } from 'react'
import UserCard from '../UserCard/UserCard'
import { Persons } from '../UsersData'
import './Users.css'

const Users = () => {
    const [Users, setUsers] = useState(Persons)
    return (
        <div>
            <h1>Welcome, this is the Users List Page</h1>
            <div className="usersList">
                {Users.map(user=><UserCard user={user} />)}
            </div>
        </div>
    )
}

export default Users
