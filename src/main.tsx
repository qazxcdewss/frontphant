import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Connected from './Connected'
import { WalletProvider } from './WalletContext'

console.log('main.tsx loaded')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/connected" element={<Connected />} />
        </Routes>
      </HashRouter>
    </WalletProvider>
  </React.StrictMode>,
)
