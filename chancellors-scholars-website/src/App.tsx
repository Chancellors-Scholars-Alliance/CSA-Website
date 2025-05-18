// Component import
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
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
      
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App;
