import { useState } from 'react'
import Nav from './comonents/Nav/Nav'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import MainLayout from './layouts/MainLayout'

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { path: '/', element: <Home /> },
        { path: 'blog', element: <Blog /> },
        { path: 'about', element: <About /> }
      ]
    }
  ],
    {
      basename: import.meta.env.BASE_URL
    })

  return (
    <>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </>
  )
}

export default App
