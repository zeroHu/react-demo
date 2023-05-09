import Square from '../square'
import styles from './index.module.scss'

const Board = props => {
  const clickedList = Object.values(props.result)

  return (
    <div className={styles['board-container']}>
      {props.dataMaps.map(item => {
        return (
          <div className={styles['board-row']} key={item.toString()}>
            {item.map(i => (
              <Square
                flag={
                  clickedList[0].includes(i)
                    ? 'X'
                    : clickedList[1].includes(i)
                    ? 'L'
                    : ''
                }
                onClick={() => props.onClick(i)}
                key={i.toString()}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Board
