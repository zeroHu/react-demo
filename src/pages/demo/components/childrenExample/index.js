import { useState } from 'react'

import Item from '../listItem'

// 子组件传参用法示例
const ChildrenComponentExample = () => {
  const [listData, setListData] = useState([
    {
      name: 'zero',
      age: 20,
    },
    {
      name: 'maria',
      age: 12,
    },
  ])

  const receiveData = (age, name) => {
    listData.find(item => item.name === name).age = age

    setListData(listData.slice()) // 浅拷贝
  }

  return (
    <div className={'shop-item-wrapper'}>
      <h2>子组件示例用法</h2>
      {listData.map((item, index) => (
        <Item
          dataItem={item}
          key={index}
          test={{ a: 1 }}
          changeChildData={(age, name) => receiveData(age, name)}
        ></Item>
      ))}
    </div>
  )
}

export default ChildrenComponentExample
