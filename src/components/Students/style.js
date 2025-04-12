import styled from "styled-components";

const Wrapper = styled.section`
  .app {
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    font-size: 20px;
    position: fixed;
    top: 0;
    width: 100%;
    background: #12a4a4;
    z-index: 1000;
    
  }

  .icon {
    width: 25px;
    cursor: pointer;
  }

  .student-list-heading {
    padding-bottom: 20px;
    background-color: #12a4a4;
    color: black;
    text-align: center;
    width: 100%;
    position: fixed;
    top: 70px;
    z-index: 900;
  }

  /* Filters */
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    background: #12a4a4;
    position: fixed;
    top: 130px;
    width: 100%;
    z-index: 800;
  }

  .filters select {
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    min-width: 70px;
    background-color: #C6E8F1;
  }

  /* Student List Container */
  .st-container {
    min-height: 65vh;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
    overflow-x: hidden;
    background: white;
    padding: 20px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    position: relative;
    top: 180px;
    width: 100%;
    box-sizing: border-box; /* Ensures padding stays inside the border */
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
    flex-wrap: wrap;
    color: black;
    width : 100%;
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
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
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
`

export default Wrapper;
