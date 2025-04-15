import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Test from './components/Test'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:"/test",
    element: <Test/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
