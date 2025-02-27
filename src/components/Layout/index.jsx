import React from 'react'
import Wrapper from './style'
import { Outlet } from 'react-router'
import BottomTab from '../BottomTab'

const Layout = () => {
  return (
    <Wrapper>
      <div className="layout">
        <div className='outlet'>
          <Outlet />
        </div>
        <div className='bottom-tab'>
          <BottomTab />
        </div>
      </div>
    </Wrapper>
  )
}

export default Layout
