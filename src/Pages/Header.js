import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: "30 px", marginBottom: "18 px" }}>
        <button className="round-button" onClick={() => setIsAdding(true)}>
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
