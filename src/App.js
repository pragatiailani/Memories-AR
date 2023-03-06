import SignIn from "./pages/signin";
import "./styles/style.css";
import "@fontsource/roboto/500.css";
import SignUp from "./pages/signup";
import ResetPassword from "./pages/resetpwd";
import CreatePassword from "./pages/createpwd";
import Verification from "./pages/verification";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const primary_colour = "#d52672";
  const light_grey = "#f3f3f3";

  const field_style = {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    alignItems: "flex-end",
    "& .MuiButton-root": {
      background: primary_colour,
      width: "100%",
      marginTop: "1vh",
    },
    "& .MuiTextField-root": {
      my: 1.2,
      width: "100%",
      background: light_grey,
    },
    "& label.Mui-focused": {
      color: primary_colour,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: primary_colour,
      },
    },
  };

  const light_button = {
    width: "70%",
    "& .MuiButton-root": {
      width: "100%",
      color: primary_colour,
      background: light_grey,
    },
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn field_style={field_style} light_button={light_button} />
            }
          />

          <Route
            path="/sign_up"
            element={
              <SignUp field_style={field_style} light_button={light_button} />
            }
          />

          <Route
            path="/reset_password"
            element={<ResetPassword field_style={field_style} />}
          />

          <Route
            path="/verification"
            element={<Verification field_style={field_style} />}
          />

          <Route
            path="/create_password"
            element={
              <CreatePassword
                primary_colour={primary_colour}
                light_grey={light_grey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
