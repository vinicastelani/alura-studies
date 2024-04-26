import React, { useState } from 'react'
import Button from '../Button'
import style from './Form.module.scss'
import ITask from '../../types/task'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
function Form({ setTasks }: Props) {
  const [taskName, setTaskName] = useState('')
  const [taskTime, setTaskTime] = useState('00:00')

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTasks((oldTasks) => [
      ...oldTasks,
      { taskName, taskTime, done: false, checked: false, id: uuidv4() },
    ])
    setTaskName('')
    setTaskTime('')
  }
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicionar</label>
        <input
          type="text"
          name="tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          id="tarefa"
          placeholder="..."
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button text="Add" type="submit" />
    </form>
  )
}

class Form1 extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    taskName: '',
    taskTime: '00:00:00',
  }
  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, done: false, checked: false, id: uuidv4() },
    ])
    this.setState({
      taskName: '',
      taskTime: '00:00:00',
    })
  }
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicionar</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.taskName}
            onChange={(e) =>
              this.setState({ ...this.state, taskName: e.target.value })
            }
            id="tarefa"
            placeholder="..."
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.taskTime}
            onChange={(e) =>
              this.setState({ ...this.state, taskTime: e.target.value })
            }
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Button text="Add" type="submit" />
      </form>
    )
  }
}

export default Form
