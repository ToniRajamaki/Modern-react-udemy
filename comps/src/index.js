import React from 'react'
import { ReactDOM, createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const el = document.getElementById('root')
const root = createRoot(el)

root.render(<App></App>)
