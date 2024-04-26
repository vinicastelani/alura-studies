import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Timer from '../components/Timer'
import style from './App.module.scss'
import ITask from '../types/task'
function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([])
  const [checked, setChecked] = useState<ITask>()
  function checkTask(checkedTask: ITask) {
    setChecked(checkedTask)
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        checked: task.id === checkedTask.id ? true : false,
      })),
    )
  }
  function updateTask() {
    if (checked) {
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === checked.id) {
            setChecked(undefined)
            return {
              ...task,
              checked: false,
              done: true,
            }
          }
          return task
        }),
      )
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} checkTask={checkTask} />
      <Timer checked={checked} updateTask={updateTask} />
    </div>
  )
}

export default App
