import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Schedule from './pages/Schedule/Schedule.js'
import Standings from './pages/Standings/Standings.js'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/unify-futbol/' element={<Home />} />
      <Route path='/unify-futbol/schedule' element={<Schedule />} />
      <Route path='/unify-futbol/standings' element={<Standings />} />
    </Routes>
  )
}

export default AppRouter
