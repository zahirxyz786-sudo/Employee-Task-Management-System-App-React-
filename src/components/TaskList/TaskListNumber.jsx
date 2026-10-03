import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex screen mt-5 gap-5 px-10 flex-nowrap'>

      <div className='bg-blue-500 w-[45%] h-30 py-5 rounded-2xl px-10'>
        <h1 className='text-2xl font-bold'>{data.data.taskCounts.active}</h1>
        <h2>Active Task</h2>
      </div>
      <div className='bg-green-500 w-[45%] h-30 py-5 rounded-2xl px-10'>
        <h1 className='text-2xl font-bold'>{data.data.taskCounts.completed}</h1>
        <h2>completed Task</h2>
      </div>
      <div className='bg-red-500 w-[45%] h-30 py-5 rounded-2xl px-10'>
        <h1 className='text-2xl font-bold'>{data.data.taskCounts.failed}</h1>
        <h2>Failed Task</h2>
      </div>
      <div className='bg-yellow-500 w-[45%] h-30 py-5 rounded-2xl px-10'>
        <h1 className='text-2xl font-bold'>{data.data.taskCounts.newTask}</h1>
        <h2>New Task</h2>
      </div>

    </div>
  )
}

export default TaskListNumber