import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

function App() {
  const [firstName, setFirstName] = useState("Joe");
  return (
    <AppStyle className="App">
      {/* <ClassBased /> */}
      <SignUpForm firstName={firstName} setFirstName={setFirstName} />
      <UserDetails />
    </AppStyle>
  );
}

export default App;