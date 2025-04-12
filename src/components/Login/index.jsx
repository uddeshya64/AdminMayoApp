import React from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate()

    const handleChange = () => {
        navigate('/home')
    }

  return (
    <Wrapper>
      <div className='login'>
        <input type='botton'
            placeholder='Login'
            name='Login'
            value='Login'
            onClick={handleChange}
        />
      </div>
    </Wrapper>
  )
}

export default Login
