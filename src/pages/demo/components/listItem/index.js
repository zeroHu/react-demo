import styles from './index.module.scss'

const ShopItem = ({ dataItem, test, changeChildData }) => {
  return (
    <div className={styles['shop-item']}>
      <span>name:{dataItem.name}</span>
      <span className={styles['font-big']}>age:{dataItem.age}</span>
      <span>test: {test.a}</span>
      <button
        className={styles['opr-btn']}
        onClick={() => changeChildData(dataItem.age + 1, dataItem.name)}
      >
        修改年龄
      </button>
    </div>
  )
}

export default ShopItem
