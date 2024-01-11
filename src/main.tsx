
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { storeRedux } from './components/storeApi/storeRedux.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={storeRedux} >
         <BrowserRouter>
           <App />
         </BrowserRouter>
      </Provider>
    </React.StrictMode>
    )
