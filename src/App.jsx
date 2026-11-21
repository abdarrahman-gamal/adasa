import Nav from './comonents/Nav/Nav'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import MainLayout from './layouts/MainLayout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Article from './pages/Article/Article'
import NotFoundPage from './pages/NotFound/NotFoundPage'

function App() {

  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('data/posts.json')
      .then((res) => {
        setItems(res.data.posts)
        console.log("res.data.posts", res.data.posts)
      })
      .catch((err) => console.error('خطأ في جلب البيانات:', err))
  }, [])
  console.log("items", items[0])

  const router = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <Home posts={items} /> },
        { path: 'blog', element: <Blog posts={items} /> },
        { path: 'about', element: <About /> },
        { path: 'blog/:id', element: <Article posts={items} /> },
        { path: '*', element: <NotFoundPage /> }
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
