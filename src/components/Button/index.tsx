import React from 'react'
import style from './Button.module.scss'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  text?: String
}

function Botao({ onClick, type, text }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {text}
    </button>
  )
}

class Button1 extends React.Component<{
  text: String
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}> {
  render() {
    const { type = 'button', onClick } = this.props
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.text}
      </button>
    )
  }
}

export default Botao
