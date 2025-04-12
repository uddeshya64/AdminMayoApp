import React, { useState, useEffect } from 'react';
import Wrapper from './style';

const Filters = ({ setIndex }) => {
  useEffect(() => {
    const clearSessionStorageOnRefresh = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", clearSessionStorageOnRefresh);
    return () => {
      window.removeEventListener("beforeunload", clearSessionStorageOnRefresh);
    };
  }, []);

  const [selectedYear, setSelectedYear] = useState(sessionStorage.getItem("year") || 2024);
  const [selectedClass, setSelectedClass] = useState(sessionStorage.getItem("class") || 1);
  const [selectedSection, setSelectedSection] = useState(sessionStorage.getItem("section") || '1');
  const [selectedQuarter, setSelectedQuarter] = useState(sessionStorage.getItem("quarter") || '1');
  const [selectedSubject, setSelectedSubject] = useState(sessionStorage.getItem("subject") || '1');

  const updateSessionStorage = (key, value, setter) => {
    sessionStorage.setItem(key, value);
    setter(value);
  };

  const handleClick = () => {
    setIndex(2);
    const updatedUserdata = {
      year: parseInt(selectedYear, 10),
      class: parseInt(selectedClass, 10),
      section: parseInt(selectedSection, 10),
      quarter: parseInt(selectedQuarter, 10),
      subject: parseInt(selectedSubject, 10)
    };
    sessionStorage.setItem("userData", JSON.stringify(updatedUserdata));
  };

  return (
    <Wrapper>
      <div id="user">
        <div id="detail">
          <p id="hi">Hi,</p>
          <h1 id="name">Mr. Cool</h1>
        </div>
      </div>
      <form className="choice">
        <label htmlFor="year">Session</label>
        <select value={selectedYear} onChange={e => updateSessionStorage("year", e.target.value, setSelectedYear)}>
          <option value={2025}>2025 - 2026</option>
          <option value={2024}>2024 - 2025</option>
        </select>

        <label htmlFor="quarter">Quarter</label>
        <select value={selectedQuarter} onChange={e => updateSessionStorage("quarter", e.target.value, setSelectedQuarter)}>
          <option value="1">Q I</option>
          <option value="2">Q II</option>
          <option value="3">T I</option>
          <option value="4">Q III</option>
          <option value="5">Q IV</option>
          <option value="6">T II</option>
        </select>

        <label htmlFor="class">Class</label>
        <select value={selectedClass} onChange={e => updateSessionStorage("class", e.target.value, setSelectedClass)}>
          {[...Array(8).keys()].map(i => <option key={i+1} value={i+1}>{i+1}</option>)}
        </select>

        <label htmlFor="section">Section</label>
        <select value={selectedSection} onChange={e => updateSessionStorage("section", e.target.value, setSelectedSection)}>
          <option value="1">Orchid</option>
          <option value="2">Tulip</option>
          <option value="3">Daffodil</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <select value={selectedSubject} onChange={e => updateSessionStorage("subject", e.target.value, setSelectedSubject)}>
          {Object.entries({
            '1': 'English', '2': 'Hindi', '3': 'Mathematics', '4': 'Science',
            '5': 'Computer Sc.', '6': 'Social Studies', '7': 'III Language',
            '8': 'GP Values', '9': 'Music', '10': 'Dance/Dramatics',
            '11': 'Art', '12': 'Sports', '13': 'Discipline', '14': 'Attendance'
          }).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ))}
        </select>

        <button
          className="get-started"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          disabled={!selectedSubject}
        >
          Get Started
        </button>
      </form>
    </Wrapper>
  );
};

export default Filters;
