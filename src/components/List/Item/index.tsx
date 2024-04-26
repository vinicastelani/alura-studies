import ITask from '../../../types/task'
import style from './Item.module.scss'

interface Props extends ITask {
  checkTask: (checkedTask: ITask) => void
}

function Item({ taskName, taskTime, checked, done, id, checkTask }: Props) {
  return (
    <li
      className={`${style.item} ${checked ? style.itemSelecionado : ''} ${
        done ? style.itemCompletado : ''
      }`}
      onClick={() =>
        !done &&
        checkTask({
          taskName,
          taskTime,
          checked,
          done,
          id,
        })
      }
    >
      <h3>{taskName}</h3>
      <span>{taskTime}</span>
      {done && <span className={style.concluido} aria-label="Done"></span>}
    </li>
  )
}

export default Item
