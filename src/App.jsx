import { Outlet } from "react-router-dom";
import { Navbar } from './modules/components/NavBar';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
