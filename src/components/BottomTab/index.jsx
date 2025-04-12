import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Wrapper from "./style"
import home from "../../assets/home.png"
import student from "../../assets/student.png"
import acList from "../../assets/acList.png"
import loList from "../../assets/loList.png"
import roList from "../../assets/roList.png"

const BottomTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (path) => {
    setActiveTab(path)
    navigate(path)
  }

  return (
    <Wrapper>
      <div className="tab-bar">
        <div 
          className={`tab ${activeTab === "/students" ? "active" : ""}`}
          onClick={() => handleTabClick("/students")}
        >
          <img src={student} alt="Student" />
          <span>Student</span>
        </div>

        <div 
          className={`tab ${activeTab === "/aclist" ? "active" : ""}`}
          onClick={() => handleTabClick("/aclist")}
        >
          <img src={acList} alt="AC List" />
          <span>AC List</span>
        </div>

        <div 
          className={`tab ${activeTab === "/home" ? "active" : ""}`}
          onClick={() => handleTabClick("/home")}
        >
          <img src={home} alt="Home" />
          <span>Home</span>
        </div>

        <div 
          className={`tab ${activeTab === "/rolist" ? "active" : ""}`}
          onClick={() => handleTabClick("/rolist")}
        >
          <img src={roList} alt="RO List" />
          <span>RO List</span>
        </div>

        <div 
          className={`tab ${activeTab === "/lolist" ? "active" : ""}`}
          onClick={() => handleTabClick("/lolist")}
        >
          <img src={loList} alt="LO List" />
          <span>LO List</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default BottomTab
