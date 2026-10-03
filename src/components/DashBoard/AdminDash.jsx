import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDash = (props) => {
    return (
        <>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </>
    )
}

export default AdminDash