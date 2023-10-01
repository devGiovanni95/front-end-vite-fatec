import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
