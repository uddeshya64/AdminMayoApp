import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Students from './components/Students'
import ACList from './components/ACList'
import LOList from './components/LOList'
import ROList from './components/ROList'
import PushNotification from './components/PushNotification'
import TeacherList from './components/TeacherList'
import Login from './components/Login'
import Profile from './components/Profile'
import MappingTree from './components/MappingTree'

const App = () => {

  const [loItems, setLoItems] = useState([])
  const [acItems, setAcItems] = useState([])
  const [studentsData, setStudentsData] = useState([])
  const [user, setUser] = useState(null)

  // Default filters
  const [filters, setFilters] = useState({
    year: "2024",
    classname: "1",
    section: "1",
    subject: "1",
    quarter: "1"
  });

  const handleLoItems = (data) => setLoItems(data)
  const handleAcItems = (data) => setAcItems(data)
  const handleStudentsData = (data) => setStudentsData(data)

  const onLogout = () => {
    setUser(null)
    localStorage.removeItem('accessToken')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home user={user} onLogout={onLogout} filters={filters} setFilters={setFilters}/>} />
          <Route path="home/profile" element={<Profile />} />
          <Route path="home/pushNotification" element={<PushNotification />} />
          <Route path="home/teacherList" element={<TeacherList />} />
          <Route path="home/mapping" element={<MappingTree />} />
          <Route path="students" element={<Students onStudentsData={handleStudentsData} onLogout={onLogout} />} />
          <Route path="students/profile" element={<Profile />} />
          <Route path="students/pushNotification" element={<PushNotification />} />
          <Route path="students/teacherList" element={<TeacherList />} />
          <Route path="students/mapping" element={<MappingTree />} />
          <Route path="aclist" element={<ACList acItems={acItems} setAcItems={setAcItems} handleAcItems={handleAcItems} studentsData={studentsData} user={user} onLogout={onLogout} filters={filters} setFilters={setFilters} />} />
          <Route path="aclist/profile" element={<Profile />} />
          <Route path="aclist/pushNotification" element={<PushNotification />} />
          <Route path="aclist/teacherList" element={<TeacherList />} />
          <Route path="aclist/mapping" element={<MappingTree />} />
          <Route path="lolist" element={<LOList loItems={loItems} setLoItems={setLoItems} handleLoItems={handleLoItems} acItems={acItems} setAcItems={setAcItems} onLogout={onLogout} filters={filters} setFilters={setFilters} />} />
          <Route path="lolist/profile" element={<Profile />} />
          <Route path="lolist/pushNotification" element={<PushNotification />} />
          <Route path="lolist/teacherList" element={<TeacherList />} />
          <Route path="lolist/mapping" element={<MappingTree />} />
          <Route 
            path="rolist" 
            element={<ROList 
              loItems={loItems} 
              setLoItems={setLoItems} 
              handleLoItems={handleLoItems} 
              acItems={acItems} 
              onLogout={onLogout} 
              filters={filters} 
              setFilters={setFilters} 
            />} 
          />
          <Route path="rolist/profile" element={<Profile />} />
          <Route path="rolist/pushNotification" element={<PushNotification />} />
          <Route path="rolist/teacherList" element={<TeacherList />} />
          <Route path="rolist/mapping" element={<MappingTree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
