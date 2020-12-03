import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { CV } from "./Pages/CV/CV";
import { ShowOffPage } from "./Pages/ShowOffPage/ShowOffPage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/CV">
              <CV />
            </Route>
            <Route path="/ShowOff">
              <ShowOffPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
