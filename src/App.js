import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Course from "./Components/Course/Course";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header"
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import NoMatch from "./Components/NoMatch/NoMatch";
import Teacher from "./Components/Teacher/Teacher";

function App() {
  return (
  <Router>
       <div>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/teacher">
            <Teacher />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
        </Switch>
      <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
