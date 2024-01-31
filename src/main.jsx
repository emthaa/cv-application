import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInfo from './components/GeneralInfo'
import CvPreview from './components/CvPreview'
import "./styles/GeneralInfo.css"
import "./main.css"
import "./styles/CvPreview.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='cv-builder'> 
      <GeneralInfo />
      <GeneralInfo />
      <GeneralInfo />
    </div>
    <CvPreview />
  </React.StrictMode>,
)
