import Nav from "../Nav/Nav";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Login from "../Login/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
