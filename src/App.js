import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About/About";
import Departments from "./Pages/Departments/Departments";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Services/Services";
import NavBar from "./Pages/Header/NavBar";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
