import logo from "./logo.svg";
import "./App.css";
import Page_login from "./components/pages/page_login/Page_login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page_register from "./components/pages/page_register/Page_register";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {sessionStorage.getItem("isLogin") ? (
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/">
              <Home />
            </Route>

            <Route>
              <Home />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/register">
              <Page_register />
            </Route>

            <Route path="/login">
              <Page_login />
            </Route>

            <Route path="/">
              <Page_login />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
