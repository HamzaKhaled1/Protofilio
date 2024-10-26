import Footer from "./Footer"
import Header from "./Heade"
import Home from "./Home"
import ProjectPage from "./ProjectPage"
import Projects from "./Projects"
import Services from "./Services"
import {BrowserRouter  ,Route,Routes } from "react-router-dom"
import Error from "./Error"
const App=()=> {


  return (
    <>
  
  <BrowserRouter>
      <Header />
      <Routes>
        {/* Route for Home page, with Services, Projects, and Footer included */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Projects />
          
            </>
          }
        />
        {/* Route for ProjectPage with dynamic ID */}
        <Route path="/project/:id" element={<ProjectPage />} />
        {/* Route for 404 or any other non-existent route */}
        <Route path="*" element={<Error />} />
      </Routes>  
        <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
