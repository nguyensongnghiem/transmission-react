import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider,Button } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider defaultColorScheme="dark"
  theme={{
    components: {
      Button: Button.extend({
        defaultProps: {
          color: 'blue',
          variant: 'filled',
        },
      }),
    },
   
    fontFamily: 'Verdana, sans-serif',
  }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ MantineProvider>
)
