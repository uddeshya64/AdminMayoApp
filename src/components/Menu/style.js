import styled from "styled-components"

const Wrapper = styled.section`
.menu {
    position: relative;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    background: rgba(0, 0, 0, 0.7); 
    z-index: 10; 
}

.menu-bar {
    width: 65vw;
    height: calc(100vh - 60px);
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    position: fixed;
}

.heading {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    h1 {
        font-size: 20px;
    }
    img {
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
}

.paths {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    overflow-y: auto;
    flex-grow: 1;
    margin-bottom: 60px; /* Leave space for logout button */
}

.paths div {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: background 0.2s ease-in-out;
}

.paths div:hover {
    background: #f1f1f1;
}

.paths div img {
    margin-right: 20px;
    width: 30px;
    height: 30px;
}

.logout {
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 60vw;
    display: flex;
    align-items: center;
    padding: 30px;
    cursor: pointer;
    z-index: 25;
    height : 50px;
    border-top : 1px solid #666;
    img {
        margin-right: 20px;
        width: 30px;
        height: 30px;
    }
}
`

export default Wrapper;