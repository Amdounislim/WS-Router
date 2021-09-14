import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import './User.css'

import avatar from "../../Assets/avatar.jpeg"

const User = ({ location, history }) => {
    const user = location.state
    return (
        <div>
            <h1>Welcome, this is the User page</h1>
            <img src={avatar} alt="avatar" />
            <h2>{user.name}</h2>
            <h5>{user.email}</h5>
            {/* <Link to="/users">
            <Button variant="info" className="go-back-btn">Go Back</Button>
            </Link > */}
            <Button variant="info" className="go-back-btn" onClick={() => history.goBack()}>Go Back</Button>
        </div>
    )
}

export default User
