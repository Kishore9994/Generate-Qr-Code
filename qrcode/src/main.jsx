import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import  { QrCode } from './QrCode.jsx'
import  "./Qrcode.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCode />
  </StrictMode>
)
