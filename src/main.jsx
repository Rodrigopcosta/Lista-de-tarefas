import React from 'react'
import ReactDOM from 'react-dom/client'
import ListaDeTarefas from './ListaDeTarefas'
import GlobalStyle from './globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ListaDeTarefas/>
  </React.StrictMode>,
)
