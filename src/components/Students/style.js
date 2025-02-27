import styled from "styled-components";

const Wrapper = styled.section`
.app {
  background: #12a4a4;
  height: 100vh;
  width : 100%;
  flex-direction: column;
  justify-content: space-between;
}

/* Header */
.header {
  background: #12a4a4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 20px;
}

.icon {
  width: 25px; /* Set width for the icon */
  cursor: pointer;
}

.student-list-heading {
  margin: -1px;
  padding-bottom: 20px;
  border-color: #12a4a4;
  border: none;
  background-color: #12a4a4;
  color: black;
  text-align: center; /* Center the text */
  width: 100%;
}

/* Filters */
.filters {
  display: flex;
  flex-wrap: wrap; /* Allow filters to wrap on smaller screens */
  gap: 10px;
  padding: 10px;
  background: #12a4a4;
}

.filters select {
  padding: 2px 2px; /* Adjusted padding for consistent spacing around the arrow */
  border-radius: 5px;
  border: none;
  cursor: pointer;
  min-width: 70px; /* Set a uniform minimum width for all select elements */
  max-width: 70px;
  background-color: #C6E8F1;
}

/* Student List Container */
.st-container {
  min-height: 80vh; /* Ensure the container occupies at least full screen height */
  max-height: calc(100vh - 100px); /* Set a maximum height based on viewport height, accounting for header */
  @media (max-width: 768px) {
    max-height: calc(80vh - 100px); /* Set a maximum height for smaller screens */
  }
  overflow-y: auto; /* Allow scrolling when content exceeds max height */
  margin-right: 10px;
  background: white;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: relative;
  width: 100%; /* Ensure full width */
}

.student-list {
  margin-top: 20px;
}

.student-card {
  border-bottom: 1px solid #575864;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  color: black;
}

.namebox {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 25px;
}

.name h5 {
  font-size: 25px;
  margin-bottom: 5px;
}

/* Bottom Navbar */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  background: #127c7c;
  padding: 15px 0;
  color: white;
  font-size: 14px;
  flex-wrap: wrap; /* Allow bottom nav to wrap */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .header {
    font-size: 18px;
  }
}

  /* Filters */
 
  /* Teacher List Container */
  
 
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .header {
      align-items: flex-start;
    }
  }
  
  @media (max-width: 480px) {
    .header {
      font-size: 18px;
    }
  
  }
  

  
`

export default Wrapper