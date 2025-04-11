// CSS Imports
import '../src/css/animate.min.css'
import '../src/css/bootstrap.min.css'
import '../src/css/events.css'
import '../src/css/jquery-ui.min.css'
import '../src/css/jquery-ui.structure.min.css'
import '../src/css/jquery-ui.theme.min.css'
import '../src/css/site-specific.css'

// Component import
import Navbar from '../src/components/Navbar';

// 
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <div >
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
