import React, { useState } from "react"; 
import backArrow from "../PushNotification/backArrow.png";
import userIcon from "./user.png";
import { FaPlus } from "react-icons/fa";
import TeacherModal from './TeacherModal/index.jsx'; // Import the modal component
import Wrapper from "./style";
import { useNavigate } from "react-router";

const TeacherList = () => {
  // Teacher data function moved inside the component
  const teachersData = [
    {
      name: "Ms Kavya Goyal",
      classes: "I, II",
      subjects: ["English", "Maths"],
      role: "Class Teacher",
      contact: "1234567890",
      email: "kavyagoyal@gmail.com",
      avatar: require('./kavya.png'),
    },
    {
      name: "Mr Rahul Sharma",
      classes: "III, IV",
      subjects: ["Science", "Maths"],
      role: "Subject Teacher",
      contact: "9876543210",
      email: "rahulsharma@gmail.com",
      avatar: require('./kavya.png'),
    },
    {
      name: "Ms Priya Verma",
      classes: "V, VI",
      subjects: ["English", "Social Science"],
      role: "Class Teacher",
      contact: "7890123456",
      email: "priyaverma@gmail.com",
      avatar: require('./kavya.png'),
    }
    // Add more teachers as needed
  ];

  // State for filters
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  // State for modal
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTeachers = teachersData.filter(teacher => {
    const matchesSubject = selectedSubject ? teacher.subjects.some(subject => subject.includes(selectedSubject)) : true;
    const matchesClass = selectedClass ? teacher.classes.includes(selectedClass) : true;
    return matchesSubject && matchesClass;
  });

  const handleCardClick = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
  };

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <Wrapper>
      <div className="app">
        <header className="header">
          <img src={backArrow} alt="BackArrow" className="icon" onClick={() => {handleNavigation("/")}}/>
          <div className="active-users">
            <button className="active-user-button">
              <img src={require('./kavya.png')} alt="User 1" className="active-user" />
            </button>
            <button className="active-user-button">
              <img src={require('./kavya.png')} alt="User 2" className="active-user" />
            </button>
          </div>
          <img src={userIcon} alt="User" className="icon" />
        </header>
        <h2 className="teachers-list-heading">Teacher’s List</h2>

        <div className="layout">
          <div className="filters">
            <select onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="">Subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
            <select onChange={(e) => setSelectedClass(e.target.value)}>
              <option value=""> Class</option>
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

          <div className="container">
            <div className="not-assigned">Not Assigned: 5</div>
            <div className="teacher-list">
              {filteredTeachers.map((teacher, index) => (
                <div className="teacher-card" key={index} onClick={() => handleCardClick(teacher)}>
                  <img src={teacher.avatar} alt="Profile" className="avatar" />
                  <div className="details">
                    <div className="name-class">
                      <h4>{teacher.name}</h4>
                      <p>Class: {teacher.classes}</p>
                    </div>
                    <div className="subjects">
                      {teacher.subjects.map((subject, idx) => (
                        <span key={idx}>{subject}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <button className="add-button">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <TeacherModal teacher={selectedTeacher} onClose={closeModal} />
        )}
      </div>
    </Wrapper>
  );
};

export default TeacherList;
