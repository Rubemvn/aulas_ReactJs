import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorProvider} from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - Criando provider */}
    <TitleColorProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </TitleColorProvider>
  </React.StrictMode>,
)
