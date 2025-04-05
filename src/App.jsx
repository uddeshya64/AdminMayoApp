import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'
import Students from './components/Students'
import ACList from './components/ACList'
import LOList from './components/LOList'
import ROList from './components/ROList'
import PushNotification from './components/PushNotification'
import Teachers from './components/TeacherList/index.jsx'; // Corrected casing
import StudentList from './components/Students/index.jsx'; // New import
import AddTeacher from './components/AddTeacher/index.jsx'; // New import
import ClassView from './components/Classview/index.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="students" element={<Students />} />
            <Route path="aclist" element={<ACList />} />
            <Route path="lolist" element={<LOList />} />
            <Route path="rolist" element={<ROList />} />
            <Route path="pushNotification" element={<PushNotification/>}/>
            <Route path="/teacherList" element={<Teachers />} /> {/* Updated Route */}
            <Route path="/students" element={<StudentList />} /> {/* New Route */}
            <Route path="/addteacher" element={<AddTeacher/>} />
            <Route path="/classview" element={<ClassView/>}    />
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
