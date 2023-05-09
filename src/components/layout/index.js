import { Outlet, Link } from 'react-router-dom'
import styles from './index.module.scss'

const Layout = () => {
  return (
    <>
      <div className={styles['header'] + ' font-base'}>
        <div>i am page title</div>
        <ul className={styles['ul']}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/demo">demo</Link>
          </li>
          <li>
            <Link to="/game">game</Link>
          </li>
        </ul>
      </div>
      {/* 二级路由的地方 */}
      <Outlet />
    </>
  )
}

export default Layout
