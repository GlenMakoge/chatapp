import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

export const Control = () => {
  return (
    <div>
        <Router>
            <div className="happ">
                <Routes>
                    <Route path='/chat' element={<h1>Chat</h1>} /> 
                    <Route path='/' element={<h1>Home Page</h1>} />
                </Routes>
            </div>
        </Router>
    </div>
  )
}
