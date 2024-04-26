import style from './List.module.scss'
import Item from './Item'
import ITask from '../../types/task'

interface Props {
  tasks: ITask[]
  checkTask: (checkedTask: ITask) => void
}

function List({ tasks, checkTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Daily studies</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item checkTask={checkTask} key={index} {...item} />
        ))}
      </ul>
    </aside>
  )
}

export default List
