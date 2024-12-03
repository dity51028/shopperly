import React from 'react'
import { Nav } from '../shared'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>

  )
}

export default AuthLayout