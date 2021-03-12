import { useState } from "react";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import Cats from "./components/Cats";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favourite from "./components/Favourite";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [loged, isLoged] = useState(false);
  const Login = (details) => {
    if (
      details.email !== "" &&
      details.password !== "" &&
      details.name !== ""
    ) {
      setUser({ name: details.name, email: details.email });
      isLoged(true);
    } else {
      setError("please fill all the fields");
    }
  };
  const LogOut = () => {
    setUser({ name: "", email: "" });
    isLoged(false);
    setError("");
  };

  return (
    <Router>
      <div className="App">
        <Nav loged={loged} LogOut={LogOut} />

        <Route
          exact
          path="/"
          component={() => (
            <LoginForm user={user} Login={Login} loged={loged} error={error} />
          )}
        />
        <Route
          exact
          path="/welcome"
          component={() => <Welcome user={user} />}
        />
        <Route exact path="/cats" component={() => <Cats />} />
        <Route exact path="/favourite" component={() => <Favourite />} />
      </div>
    </Router>
  );
}

export default App;
