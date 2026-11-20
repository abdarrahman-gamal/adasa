import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../comonents/Nav/Nav'


export default function MainLayout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}
