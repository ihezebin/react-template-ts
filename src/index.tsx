import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const content = `
 _                      _     _
| |                    | |   (_)
| | _   ____ _____ ____| | _  _ ____
| || \\ / _  |___  ) _  ) || \\| |  _ \\
| | | ( (/ / / __( (/ /| |_) ) | | | |
|_| |_|\\____|_____)____)____/|_|_| |_|
        `
console.log(content)

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
)
