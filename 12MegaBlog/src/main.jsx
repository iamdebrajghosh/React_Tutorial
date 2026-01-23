import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllPost from './pages/AllPost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (<AuthLayout auhtentication={false}><Login /></AuthLayout>),
      },
      {
        path: '/register',
        element: (<AuthLayout auhtentication={false}><Signup /></AuthLayout>),
      },
      {
        path: '/all-posts',
        element: (<AuthLayout auhtentication={" "}><AllPost /></AuthLayout>),
      },
      {
        path: '/add-post',
        element: (<AuthLayout auhtentication={" "}><AddPost /></AuthLayout>),
      },
      {
        path: '/edit-post/:id',
        element: (<AuthLayout auhtentication={" "}><EditPost /></AuthLayout>),
      },
      {
        path: '/post/:slug',
        element: <Post />,
      },

    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
