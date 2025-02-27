import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Students from './components/Students'
import ACList from './components/ACList'
import LOList from './components/LOList'
import ROList from './components/ROList'
import PushNotification from './components/PushNotification'
import TeacherList from './components/TeacherList/index.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<Students />} />
          <Route path="aclist" element={<ACList />} />
          <Route path="lolist" element={<LOList />} />
          <Route path="rolist" element={<ROList />} />
          <Route path="pushNotification" element={<PushNotification/>}/>
          <Route path="teacherList" element={<TeacherList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
