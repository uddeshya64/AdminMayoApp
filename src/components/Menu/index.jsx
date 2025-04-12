import React, { useState } from 'react';
import Wrapper from './style';
import notification from '../../assets/notification.png';
import adminAdd from '../../assets/adminAdd.png';
import teacherList from '../../assets/teacherList.png';
import tutorial from '../../assets/tutorial.png';
import cancel from '../../assets/cancel.png';
import humburger from '../../assets/hamburger.png';
import { useNavigate, useLocation } from 'react-router-dom';
import mapping from '../../assets/brain.png'
import logout from '../../assets/logout.png'

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(null);

    const handleVisibility = (section) => {
        setIsVisible(isVisible === section ? null : section);
    };

    // Extracting base path (home, students, aclist, lolist, rolist)
    const basePath = location.pathname.split('/')[1];

    return (
        <Wrapper>
            <div className='menu'>
                <div className='hamburger'>
                    <img src={humburger} alt='Hamburger' onClick={() => handleVisibility("menu")} />
                </div>
                {isVisible === "menu" && (
                    <>
                        <div className="overlay" onClick={() => handleVisibility(null)}></div>
                        <div className="menu-bar">
                            <div className='heading'>
                                <h1>Menu</h1>
                                <img src={cancel} alt='Cancel' onClick={() => handleVisibility(null)} />
                            </div>
                            <div className='paths'>
                                <div onClick={() => navigate(`/${basePath}/pushNotification`)}>
                                    <img src={notification} alt="Send Notification" />
                                    <span>Send Notification</span>
                                </div>
                                <div onClick={() => navigate(`/${basePath}/mapping`)}>
                                    <img src={mapping} alt="Mapping Tree" />
                                    <span>Mapping Tree</span>
                                </div>
                                <div onClick={() => navigate(`/${basePath}/teacherList`)}>
                                    <img src={teacherList} alt="Teacher Management" />
                                    <span>Teacher List</span>
                                </div>
                                <div onClick={() => navigate(`/${basePath}/tutorial`)}>
                                    <img src={tutorial} alt="Tutorial" />
                                    <span>Tutorial</span>
                                </div>
                                <div className='logout'>
                                    <img src={logout} alt="Logout" />
                                    <span>Logout</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export default Menu;
