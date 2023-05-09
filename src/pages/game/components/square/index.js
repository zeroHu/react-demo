import styles from './index.module.scss'

const Square = props => {
  return (
    <div className={styles['square']} onClick={props.onClick}>
      {props.flag}
    </div>
  )
}

export default Square
