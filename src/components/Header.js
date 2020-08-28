import React from "react";
import todoImg from "../images/todo-illustration.jpg";

const Header = (props) => {
  const hStyle = {
    textAlign: "center",
    color: "gray",
  };
  return (
    <header className="active">
      <img
        // src={require('../images/todo-illustration.jpg')}
        src={todoImg}
        alt="Mann checkt Liste"
        style={{ width: "250px", margin: "auto", display: "block" }}
      />
      <h1 style={hStyle}>The Amazing To Do App</h1>
      {props.timeToGetBusy ? (
        <h2 style={{ ...hStyle, marginBottom: "30px" }}>Time to get busy!</h2>
      ) : null}
      <p style={{ marginBottom: "15px" }}>Add, Edit or Delete a Todo Item.</p>
    </header>
  );
};

export default Header;
