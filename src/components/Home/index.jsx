import React, { useState, useEffect, filters } from "react";
import ReactApexChart from "react-apexcharts";
import Wrapper from "./style";
import Menu from "../Menu";
import axios from "axios";
import userImage from '../../assets/user.png'
import { useLocation, useNavigate } from "react-router";
import Profile from "../Profile";
import profile from '../../assets/user.png'

const Home = ({ setIndex, user, onLogout, filters, setFilters }) => {

  const REACT_APP_API_URL = "https://mayoor-server.vercel.app"

  const [selectedChart, setSelectedChart] = useState("ac");
  const [acData, setAcData] = useState([]);
  const [loData, setLoData] = useState([]);
  const [roData, setRoData] = useState([]);
  const [userData, setUserData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()

  const { year, subject, quarter, classname, section } = filters

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  }

  const studentData = {
    high: ["Aman", "Priya", "Rohit", "Neha", "Vikram"],
    average: ["Karan", "Sneha", "Mohan", "Anjali", "Raj"],
    low: ["Tina", "Arjun", "Simran", "Ravi", "Pooja"],
  };

  const getSubjectName = (id) => {
    const subjects = [
      "English", "Hindi", "Mathematics", "Science", "Computer Sc.",
      "Social Studies", "III Language", "GP Values", "Music",
      "Dance/Dramatics", "Art", "Sports", "Discipline", "Attendance"
    ];
    return subjects[id - 1] || "N/A";
  };

  const getQuarterName = (id) => {
    const quarters = {
      "1": "Q1",
      "2": "Q2",
      "3": "T1",
      "4": "Q3",
      "5": "Q4",
      "6": "T2"
    };
    return quarters[id] || "N/A";
  };

  const getSectionName = (id) => {
    const sections = {
      "1": "Orchid",
      "2": "Tulip",
      "3": "Daffodil"
    };
    return sections[id] || "N/A";
  };

  const handleOpenModal = (category) => {
    const selectedChartData = studentDataByChart[selectedChart];
    setSelectedStudents(selectedChartData[category.toLowerCase()]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalContent = document.querySelector(".modal-content");

    if (modalOverlay && modalContent) {
      modalOverlay.classList.add("fadeOut");
      modalContent.classList.add("fadeOut");

      setTimeout(() => {
        setShowModal(false);
      }, 300); // Wait for animation to complete
    } else {
      setShowModal(false);
    }
  };


  const [metricData, setMetricData] = useState([
    { value: 54, label: "HIGH", range: "67% - 100%", color: "#E8F5E9", border: "#C8E6C9" },
    { value: 40, label: "AVERAGE", range: "35% - 66%", color: "#FFF3E0", border: "#FFCCBC" },
    { value: 10, label: "LOW", range: "0% - 33%", color: "#FFEBEE", border: "#FFCDD2" },
  ]);


  const studentDataByChart = {
    ac: {
      high: ["Aman", "Priya", "Rohit", "Neha", "Vikram"],
      average: ["Karan", "Sneha", "Mohan", "Anjali", "Raj"],
      low: ["Tina", "Arjun", "Simran", "Ravi", "Pooja"],
    },
    lo: {
      high: ["John", "Michael", "Alex", "Emma", "Sophia"],
      average: ["Olivia", "Liam", "Lucas", "Ava", "Grace"],
      low: ["David", "Ethan", "Mia", "Noah", "Chloe"],
    },
    ro: {
      high: ["Raj", "Sanya", "Kabir", "Ishita", "Aryan"],
      average: ["Arjun", "Meera", "Manav", "Aditi", "Kunal"],
      low: ["Neeraj", "Simran", "Tushar", "Isha", "Rohan"],
    },
  }

  const selectedData =
    selectedChart === "ac" ? acData :
      selectedChart === "lo" ? loData :
        roData;
  const prefix = selectedChart === "LO" ? "LO" : selectedChart === "RO" ? "RO" : "AC";


  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);


  const loadLoScore = async () => {
    if (!filters || !filters.year || !filters.classname || !filters.section || !filters.subject || !filters.quarter) return;

    const headers = {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json',
      year: filters.year,
      classname: filters.classname,
      section: filters.section,
      subject: filters.subject,
      quarter: filters.quarter,
    };

    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/class-overview-lo-avg`, { headers });
      console.log('LO API Response:', response.data);

      // Ensure response contains valid data
      if (response.data && Array.isArray(response.data.class_lo_averages)) {
        const scores = response.data.class_lo_averages.map(item => item.average_score);
        console.log("Extracted scores:", scores);
        setLoData(scores);
      } else {
        setLoData([]); // Reset to avoid errors
        console.error("Invalid AC Data format:", response.data);
      }


    } catch (error) {
      console.error('Error fetching LO scores:', error);
      setLoData([]);
    }
  };

  useEffect(() => {
    if (
      filters &&
      filters.year &&
      filters.classname &&
      filters.section &&
      filters.subject &&
      filters.quarter
    ) {
      loadLoScore();
    }
  }, [filters]);

  useEffect(() => {
    // ✅ Mocked dynamic metric data based on selectedChart
    const updatedMetricData =
      selectedChart === "ac"
        ? [
          { value: 54, label: "HIGH", range: "67% - 100%", color: "#E8F5E9", border: "#C8E6C9" },
          { value: 40, label: "AVERAGE", range: "35% - 66%", color: "#FFF3E0", border: "#FFCCBC" },
          { value: 11, label: "LOW", range: "0% - 33%", color: "#FFEBEE", border: "#FFCDD2" },
        ]
        : selectedChart === "lo"
          ? [
            { value: 44, label: "HIGH", range: "67% - 100%", color: "#E8F5E9", border: "#C8E6C9" },
            { value: 30, label: "AVERAGE", range: "35% - 66%", color: "#FFF3E0", border: "#FFCCBC" },
            { value: 12, label: "LOW", range: "0% - 33%", color: "#FFEBEE", border: "#FFCDD2" },
          ]
          : [
            { value: 34, label: "HIGH", range: "67% - 100%", color: "#E8F5E9", border: "#C8E6C9" },
            { value: 20, label: "AVERAGE", range: "35% - 66%", color: "#FFF3E0", border: "#FFCCBC" },
            { value: 13, label: "LOW", range: "0% - 33%", color: "#FFEBEE", border: "#FFCDD2" },
          ];

    setMetricData(updatedMetricData);
  }, [selectedChart]);

  const loadRoScore = async () => {
    if (!filters || !filters.year || !filters.classname || !filters.section || !filters.subject || !filters.quarter) return;

    const headers = {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json',
      year: filters.year,
      classname: filters.classname,
      section: filters.section,
      subject: filters.subject,
      quarter: filters.quarter,
    };

    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/class-overview-ro-avg`, { headers });
      console.log('RO API Response:', response.data);

      // Ensure response contains valid data
      if (response.data && Array.isArray(response.data.class_ro_averages)) {
        const scores = response.data.class_ro_averages.map(item => item.average_score);
        console.log("Extracted scores:", scores);
        setRoData(scores);
      } else {
        setRoData([]); // Reset to avoid errors
        console.error("Invalid RO Data format:", response.data);
      }

    } catch (error) {
      console.error('Error fetching RO scores:', error);
      setRoData([]);
    }
  };

  useEffect(() => {
    if (
      filters &&
      filters.year &&
      filters.classname &&
      filters.section &&
      filters.subject &&
      filters.quarter
    ) {
      loadRoScore();
    }
  }, [filters]);

  const loadAcScore = async () => {
    if (!filters || !filters.year || !filters.classname || !filters.section || !filters.subject || !filters.quarter) return;

    const headers = {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json',
      year: filters.year,
      classname: filters.classname,
      section: filters.section,
      subject: filters.subject,
      quarter: filters.quarter,
    };

    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/class-overview-ac-avg`, { headers });
      console.log('AC API Response:', response.data);

      // Ensure response data is an array
      if (response.data && Array.isArray(response.data.class_ac_averages)) {
        const scores = response.data.class_ac_averages.map(item => item.average_score);
        console.log("Extracted scores:", scores);
        setAcData(scores);
      } else {
        setAcData([]); // Reset to avoid errors
        console.error("Invalid AC Data format:", response.data);
      }

    } catch (error) {
      console.error('Error fetching AC scores:', error);
      setAcData([]);
    }
  };

  useEffect(() => {
    if (
      filters &&
      filters.year &&
      filters.classname &&
      filters.section &&
      filters.subject &&
      filters.quarter
    ) {
      loadAcScore();
    }
  }, [filters]);

  // Chart configuration for ApexCharts
  const getChartOptions = () => ({
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false }, // ✅ Disable zoom
      background: "rgb(158, 184, 160 , 0.05)",
      parentHeightOffset: 10,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: selectedChart === "ac" ? ["#2d6a4f"] : selectedChart === "lo" ? ["#74c69d"] : ["#40916c"],
    markers: {
      size: 6,
      strokeWidth: 2,
      hover: { size: 8 },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.5,
        opacityFrom: 0.6,
        opacityTo: 0.5,
      },
    },
    grid: {
      borderColor: "#ddd",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      style: { fontSize: "14px" },
    },
    xaxis: {
      categories: selectedData.length
        ? selectedData.map((_, i) => `${selectedChart.toUpperCase()} ${i + 1}`)
        : [`${selectedChart.toUpperCase()} 1`, `${selectedChart.toUpperCase()} 2`],
      labels: { rotate: 0, style: { fontSize: "12px", colors: "#666" } },
      tickAmount: selectedData.length, // ✅ Keep gap consistent
    },
    yaxis: {
      min: 0,
      max: 1,
      tickAmount: 5,
      labels: { formatter: (value) => value.toFixed(2) },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      line: {
        dataLabels: { enabled: false },
      },
    },
    scrollablePlotArea: {
      enabled: true,
      scrollHorizontal: true,
      scrollHeight: undefined,
      padding: {
        right: 10,
      },
    },

  });

  const getChartSeries = () => {
    const data =
      selectedChart === "ac" ? acData :
        selectedChart === "lo" ? loData :
          roData;
    console.log("chart", data)
    return [{
      name: selectedChart.toUpperCase() + " Scores",
      data: Array.isArray(data) && data.length > 0 ? data : [0], // Fallback to avoid errors
    }];
  };

  const loadStudentsAvg = async () => {
    if (!filters || !filters.year || !filters.classname || !filters.section || !filters.subject || !filters.quarter) return;

    const headers = {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json',
      year: filters.year,
      classname: filters.classname,
      section: filters.section,
      subject: filters.subject,
      quarter: filters.quarter,
    };

    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/class_ac_averages`, { headers });
      console.log('Load Students Response:', response.data);

    } catch (error) {
      console.error('Error fetching AC scores:', error);
      setAcData([]);
    }
  };

  useEffect(() => {
    if (
      filters &&
      filters.year &&
      filters.classname &&
      filters.section &&
      filters.subject &&
      filters.quarter
    ) {
      loadStudentsAvg();
    }
  }, [filters]);

  const chartWidth = selectedData.length > 5 ? Math.max(400, selectedData.length * 80) : 400; // Adjust width dynamically

  const basePath = location.pathname.split('/')[1];

  return (
    <Wrapper>
      <div className="container">
        <div className="icon">
          <Menu />
          <img src={profile} alt="Profile" onClick={() => navigate(`/${basePath}/profile`)} />
        </div>
        <div className="class-title">
          <h2>Class Overview</h2>
        </div>
        <div className="class-header">
          <select value={year} onChange={(e) => handleFilterChange('year', e.target.value)}>
            <option value="2025">2025-2026</option>
            <option value="2024">2024-2025</option>
          </select>

          <select value={subject} onChange={(e) => handleFilterChange('subject', e.target.value)}>
            {["English", "Hindi", "Mathematics", "Science", "Computer Sc.", "Social Studies", "III Language", "GP Values", "Music", "Dance/Dramatics", "Art", "Sports", "Discipline", "Attendance"].map((subj, index) => (
              <option key={index} value={index + 1}>{subj}</option>
            ))}
          </select>

          <select value={quarter} onChange={(e) => handleFilterChange('quarter', e.target.value)}>
            <option value="1">Q1</option>
            <option value="2">Q2</option>
            <option value="3">T1</option>
            <option value="4">Q3</option>
            <option value="5">Q4</option>
            <option value="6">T2</option>
          </select>

          <select value={classname} onChange={(e) => handleFilterChange('classname', e.target.value)}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>

          <select value={section} onChange={(e) => handleFilterChange('section', e.target.value)}>
            <option value="1">Orchid</option>
            <option value="2">Tulip</option>
            <option value="3">Daffodil</option>
          </select>
        </div>

      </div>
      <div className="class-container">
        <div className="info-box">
          <div className="info-text">
            <p><strong>Class:</strong> {filters.classname}</p>
            <p><strong>Year:</strong> {filters.year}</p>
            <p><strong>Subject:</strong> {getSubjectName(filters.subject)}</p>
          </div>
          <div className="info-text">
            <p><strong>Section:</strong> {getSectionName(filters.section)}</p>
            <p><strong>Quarter:</strong> {getQuarterName(filters.quarter)}</p>
          </div>
        </div>

        <div className="chart-selection">
          <div className="custom-dropdown">
            <select
              className="chart-dropdown"
              value={selectedChart}
              onChange={(e) => setSelectedChart(e.target.value)}
            >
              <option value="ac">AC Average</option>
              <option value="lo">LO Average</option>
              <option value="ro">RO Average</option>
            </select>
          </div>
        </div>


        {/* Chart Display */}
        <div className="chart-wrapper">
          <div className="chart-container" style={{ width: `${chartWidth}px` }} >
            <ReactApexChart
              options={getChartOptions()}
              series={getChartSeries()}
              type="line"
              height={250}
            />
          </div>
        </div>


        <div className="metric-cards-container">
          {metricData.map((metric, index) => (
            <div
              key={index}
              className="metric-card"
              style={{
                backgroundColor: metric.color,
                border: `1px solid ${metric.border}`,
              }}
            >
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-range">{metric.range}</div>

              <button
                className="view-button"
                onClick={() => handleOpenModal(metric.label)}
              >
                View Students
              </button>
            </div>
          ))}
        </div>
      </div>

    </Wrapper>
  );
};

export default Home;