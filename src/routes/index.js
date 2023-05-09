import { lazy } from 'react'

import Home from '../pages/home'

const Demo = lazy(() => import('../pages/demo'))
const About = lazy(() => import('../pages/about'))
const NoPage = lazy(() => import('../pages/noPage'))
const Game = lazy(() => import('../pages/game'))

const Layout = lazy(() => import('../components/layout'))

const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        // element: <Navigate to={"/about"} /> // 默认打开
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about/:id',
        element: <About />,
      },
      {
        path: 'demo',
        element: <Demo />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
  {
    path: '*',
    element: <NoPage />,
  },
]

export default routerConfig
