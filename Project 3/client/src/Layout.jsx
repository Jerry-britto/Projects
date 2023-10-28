import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div
      className='w-full h-screen bg-cover'
      style={{backgroundImage:`url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=sph')`}}
    >
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
