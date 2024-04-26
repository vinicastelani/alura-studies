import { useState, useEffect } from 'react'
import { timeToSeconds } from '../../common/utils/time'
import ITask from '../../types/task'
import Button from '../Button'
import Panel from './Panel'
import style from './Timer.module.scss'
interface Props {
  checked: ITask | undefined
  updateTask: () => void
}
export default function Timer({ checked, updateTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (checked?.taskTime) {
      setTime(timeToSeconds(String(checked.taskTime)))
    }
  }, [checked])

  function startTimer(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)
        return startTimer(time - 1)
      }
      updateTask()
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Pick a card and start the timer.</p>
      <div className={style.relogioWrapper}>
        <Panel time={time} />
      </div>
      <div>
        <Button text="Start" onClick={() => startTimer(time)} />
      </div>
    </div>
  )
}
