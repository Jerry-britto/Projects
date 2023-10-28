import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CreateUser from './components/CreateUser.jsx'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import ShowData from './components/ShowData'
import DisplayData from './components/DisplayData'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/search' element={<ShowData/>} />
      <Route path='/display' element={<DisplayData/>} />
      <Route path='/create' element={<CreateUser/>} />
      <Route path='/update' element={<UpdateUser/>} />
      <Route path='/delete' element={<DeleteUser/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
