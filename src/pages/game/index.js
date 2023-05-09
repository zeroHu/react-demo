import { useState } from 'react'

import Board from './components/board'
import styles from './index.module.scss'

const Game = () => {
  const dataMaps = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]

  let [result, setResult] = useState({
    X: [],
    L: [],
  })

  let [clickNumber, setClickNumber] = useState(0)
  const currentPlayer = ['X', 'L']

  const handleClick = val => {
    // 将结果记录
    const allResult = Object.values(result).flat(2)
    // 判断是否已经占用格子, 或者已经有人胜利后
    if (allResult.includes(val) || winnerNumber !== null) return
    // 结果内容push
    result[currentPlayer[clickNumber % 2]].push(val)
    setResult(result)
    // 点击次数计算
    clickNumber++
    setClickNumber(clickNumber)
    // 判断是否有人胜利
    clickNumber > 4 && winnerCompute()
  }

  // 工具函数
  const includesFn = (arr_big, arr_small) => {
    return arr_small.every(item => arr_big.includes(item))
  }

  // 判断胜利是X还是L
  let [winnerNumber, setWinnerNumber] = useState(null)

  // 判断是否有人胜利
  const winnerCompute = () => {
    const winMaps = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winMaps.forEach(item => {
      Object.values(result).forEach((i_val, index) => {
        if (winnerNumber === null && includesFn(i_val, item)) {
          winnerNumber = index
          setWinnerNumber(winnerNumber)
        }
      })
    })
  }
  // 渲染
  const list = () => {
    const res = []
    for (let i = 0; i <= clickNumber; i++) {
      res.push(
        <li key={i}>
          {result['X'][i] ? <p>X clicked: {result['X'][i]}</p> : ''}
          {result['L'][i] ? <p>L clicked: {result['L'][i]}</p> : ''}
        </li>
      )
    }
    return res
  }
  return (
    <div className={styles['game-root']}>
      <Board
        dataMaps={dataMaps}
        onClick={val => handleClick(val)}
        result={result}
      ></Board>
      <div>
        {winnerNumber !== null
          ? 'winner is:' + currentPlayer[winnerNumber]
          : 'next player:' + currentPlayer[clickNumber % 2]}
        {list()}
      </div>
    </div>
  )
}

export default Game
