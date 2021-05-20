import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  retypedPassword: "",
};

function App() {
  const [firstName, setFirstName] = useState(initialState);

  return (
    <AppStyle className="App">
      {/* <ClassBased /> */}
      <SignUpForm firstName={firstName} setFirstName={setFirstName} />
      <UserDetails firstName={firstName} />
    </AppStyle>
  );
}

export default App;