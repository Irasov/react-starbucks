import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound"
import Shop from "./pages/Shop"
function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>   

      )
  }

export default App
