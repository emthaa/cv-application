import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInfo from './components/GeneralInfo'
import Experience from './components/Experience'
import Education from './components/Education'
import CvPreview from './components/CvPreview'
import "./styles/InputForms.css"
import "./main.css"
import "./styles/CvPreview.css"
import { useState } from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='cv-builder'> 
      <GeneralInfo />
      <Experience />
      <Education />
    </div>
    <CvPreview />
  </React.StrictMode>,
)
