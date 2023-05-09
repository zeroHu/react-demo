import Rem from './utils/rem'
import { useRoutes } from 'react-router-dom'
import React, { useEffect, Suspense } from 'react'

import routerConfig from './routes'

function App() {
  useEffect(() => {
    Rem()
  })

  return (
    <Suspense
      fallback={
        <>
          <span style={{ fontSize: '12px' }}>loading</span>
        </>
      }
    >
      {useRoutes(routerConfig)}
    </Suspense>
  )
}

export default App
