import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .outlet {
    flex-grow: 1;
    overflow-y: auto;
    padding-bottom: 60px; /* Ensures content doesn't overlap with bottom tab */
  }

  .bottom-tab {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #12736F;
  }
`;

export default Wrapper;
