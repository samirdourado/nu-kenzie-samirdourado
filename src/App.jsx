import "../src/Global.css"
import { useState } from "react";
import HomePage from "./pages/starter/Home";

import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [access, setAccess] = useState(true)

  return(
    <>
      {access === true ? <HomePage setAccess={setAccess} /> : <Dashboard /> 
        || 
        access === false ? <Dashboard setAccess={setAccess} /> : <HomePage />
      }
      
      {/* <Dashboard /> */}
    </>
  )  
}

export default App;
