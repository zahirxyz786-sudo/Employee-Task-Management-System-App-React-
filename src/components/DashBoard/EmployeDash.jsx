import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../TaskList/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDash = (props) => {
    return (
        <div>
            <Header changeUser={props.changeUser} data={props} />
            <TaskListNumber data={props} />
            <TaskList data={props}/>
        </div>
    )
}

export default EmployeDash