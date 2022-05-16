import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";


function App() {
  return (
    <div>
      <Navbar>
         <Home></Home>
         <About/>
         <Contact/>
         <Services/>
         <Login/>
      </Navbar>
 {/* <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1>
    <button className="btn btn-primary">hey</button> */}
    </div>
  );
}

export default App;
