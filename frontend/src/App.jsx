import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Education from "./Pages/Education"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Resume from "./Pages/Resume"
import Layout from "./Layout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,

      children: [
        {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/about",
      element: <><About/></>
    },
    {
      path: "/education",
      element: <><Education/></>
    },
    {
      path: "/skills",
      element: <><Skills/></>
    },
    {
      path: "/projects",
      element: <><Projects/></>
    },
    {
      path: "/resume",
      element: <><Resume/></>
    },
    {
      path: "/contact",
      element: <><Contact/></>
    }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
