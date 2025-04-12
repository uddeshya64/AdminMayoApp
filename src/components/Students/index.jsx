import React, { useState } from "react"; 
import hamburgerIcon from "../../assets/hamburger.png";
import userIcon from "../../assets/user.png";
import { FaPlus } from "react-icons/fa";
import Wrapper from "./style";
import { useLocation, useNavigate } from "react-router";
import Menu from "../Menu";


const Students = () => {
  // Student data function inside the component
  const studentsData = () => {
    return [
      {
        name: "Kavya Goyal",
        avatar: require('../../assets/kavya.png'), 
      },
      {
        name: "Rahul Sharma",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Priya Verma",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Aman Gupta",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Neha Singh",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Rohit Mehta",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Anjali Kapoor",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Suresh Yadav",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Ritu Jain",
        avatar: require('../../assets/kavya.png'),
      },
      {
        name: "Vikram Das",
        avatar: require('../../assets/kavya.png'),
      }
    ];
  };

  const students = studentsData();
  
  // State for filters
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState(""); 

  // State for modal
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudents = students.filter(student => {
    const matchesClass = selectedClass ? student.classes?.includes(selectedClass) : true;
    return matchesClass;
  });

  const handleCardClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
    <div className="app">
      {/* Header */}
      <header className="header">
        <Menu />
        <img src={userIcon} alt="User" className="icon" />
      </header>
      <h2 className="student-list-heading">Student’s List</h2>

      {/* Layout for Filters and Student List */}
      <div className="layout">
        {/* Filters */}
        <div className="filters">
          <select onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="">Class</option>
            <option value="I">Class I</option>
            <option value="II">Class II</option>
            <option value="III">Class III</option>
            <option value="IV">Class IV</option>
            <option value="V">Class V</option>
            <option value="VI">Class VI</option>
            <option value="VII">Class VII</option>
            <option value="VIII">Class VIII</option>
            <option value="IX">Class IX</option>
          </select>
          <select onChange={(e) => setSelectedSection(e.target.value)}>
            <option value="">Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        {/* Student List Container */}
        <div className="st-container">
          <div className="student-list">
            {filteredStudents.map((student, index) => (
              <div className="student-card" key={index} onClick={() => handleCardClick(student)}>
                <img src={student.avatar} alt="Profile" className="namebox" />
                <div className="stname">
                  <div className="name-class">
                    <h5>{student.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for Student Details */}
    </div>
    </Wrapper>
  );
};

export default Students;
