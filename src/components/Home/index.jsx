import React, { useState } from 'react'
import Wrapper from './style'
import humburger from './hamburger.png'
import { useNavigate } from 'react-router'
import cancel from './cancel.png'
import subjectAdd from './subjectAdd.png'
import toturial from './toturial.png'
import notification from './notification.png'
import adminAdd from './adminAdd.png'
import teacherList from './teacherList.png'

const Home = () => {

  const[visible,setVisible] = useState(false)

  const handleVisible = () => {
    setVisible('true')
  }

  const navigate = useNavigate();

  const handleChange = (path) => {
    navigate(path)
  }

  return (
    <Wrapper>
      <div className='cover'>
        {!visible ? (
        <div className='menu'>
          <img src={humburger} alt="Humburger" onClick={() => setVisible(true)} />
        </div>
        ) : (
        <div className='blur-overlay'>
          <div className='humburger'>
            <img src={cancel} alt='Cancel' className='cancel' onClick={() => setVisible(false)}/>
            <div className='paths'>
              <img src={teacherList} alt="TeacherList" className='teacherList' onClick={() => handleChange('/teacherList')}/>
              <img src={adminAdd} alt="AdminAdd" className='adminAdd' />
              <img src={notification} alt="Notification" className='notification' onClick={() => handleChange('/pushNotification')} />
              <img src={toturial} alt="Toturial" className='toturial' />
              <img src={subjectAdd} alt="subjecAdd" className='subjectAdd' />
            </div>
          </div>
        </div> 
        )}
      </div>
    </Wrapper>
  )
}

export default Home
