import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Pokemon } from './Components/Pokemon.jsx'
import TodoApp from './Components/TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store}>
      <TodoApp />
      <br /><hr /><br />
      <Pokemon />
    </Provider>
  </React.StrictMode>,
)
