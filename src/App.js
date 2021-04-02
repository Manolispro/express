import { useState, useContext } from "react";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import Cats from "./components/Cats";
import TestLoginForm from "./components/TestLoginForm";
import Welcome from "./components/Welcome";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Favourite from "./components/Favourite";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./components/NotFound";
//--------------MATERIAL UI--------------------------
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#14213d " },
    secondary: { main: "#fca311" },
  },
});
function App() {
  const {
    userName,
    passWord,
    setPassword,
    setUsername,
    isLoggedIn,
  } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Switch>
          <div className="App">
            {/* <Route path="/login" component={LoginForm} /> */}
            <Route path="/login" component={TestLoginForm} />
            <ProtectedRoute path="/welcome" component={Welcome} />
            <ProtectedRoute path="/favourite" component={Favourite} />
            <ProtectedRoute path="/cats" component={Cats} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </div>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
