import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'


const store = configureStore({
  reducer: {
    counter: counterReducer // 将counter 的值绑在counter对象上， state.counter.xxxx
  }
})


export default store

// // 可以订阅 store
// store.subscribe(() => console.log(store.getState()))

// // 将我们所创建的 action 对象传递给 `dispatch`
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// {value: 1}