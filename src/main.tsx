import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ShoppingCartProvider } from './context/shoppingContet.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
  <React.StrictMode>
         <BrowserRouter>
           <ShoppingCartProvider>
              <App />
           </ShoppingCartProvider>
         </BrowserRouter>
     
  </React.StrictMode>
  </Provider>
)
