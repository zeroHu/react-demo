import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremented, decremented } from '../../store/counter'
import { useNavigate } from 'react-router-dom'

import ChildrenComponentExample from './components/childrenExample'
import styles from './index.module.scss'

// 状态管理用法示例
const ReduxExample = () => {
  const count = useSelector(state => {
    return state.counter.value
  })
  const dispatch = useDispatch()

  return (
    <div>
      <h2>redux使用示例</h2>
      <button onClick={() => dispatch(incremented())}>add</button>
      <p className="font-20">{count}</p>
      <button onClick={() => dispatch(decremented())}>reduce</button>
    </div>
  )
}

// style 样式用法示例
const StyleExample = () => {
  const style2 = {
    fontSize: '30px',
    color: 'blue',
  }

  const [textColor, setTextColor] = useState({
    color: 'pink',
  })

  const count = useSelector(state => {
    return state.counter.value
  })

  // 监听参数改变
  useEffect(() => {
    console.log('---changed')
  }, [textColor, count]) // 这里是count 或者 textColor 改变了都会触发

  return (
    <div className={styles['demo-root']}>
      <h2>style使用示例</h2>
      <span>count value：{count}</span>
      <p style={style2}>style 示例1</p>
      <p style={{ marginTop: '20px', marginBottom: '30px' }}>style 示例2</p>
      <div style={{ color: textColor.color }}>
        style 示例3
        <button
          onClick={() =>
            setTextColor(() => ({
              color: textColor.color === 'pink' ? 'green' : 'pink',
            }))
          }
        >
          改变示例3颜色
        </button>
      </div>
    </div>
  )
}

// 页面跳转示例

const LocationHref = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    // params 参数
    // navigate('/about/1')

    // search参数
    // navigate('/about?name=zero')

    // state 参数
    navigate('/about', {
      state: {
        datas: 'demo',
      },
    })
  }
  return (
    <>
      <h2>跳转示例</h2>
      <button onClick={handleClick}>点击跳转到about页面</button>
    </>
  )
}

// 总页面
const ShopList = () => {
  return (
    <div
      className={styles.root + ' navbar navbar-light ' + styles['demo-root']}
    >
      <div>
        <h1 className={styles.title}>示例合集页面</h1>
        <ChildrenComponentExample></ChildrenComponentExample>
        <hr></hr>
        <ReduxExample></ReduxExample>
        <hr></hr>
        <StyleExample></StyleExample>
        <hr></hr>
        <LocationHref></LocationHref>
      </div>
    </div>
  )
}

export default ShopList
