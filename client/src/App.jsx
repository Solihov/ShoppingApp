import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import { HomePage } from "./pages/HomePage"
import "./style/global.scss"
import { NavRouter } from "./router/NavRouter"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {NavRouter.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  )
}

export default App