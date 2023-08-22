// Code Keypad Component Here
import React from "react";

function Keypad() {
  const handlePasswordChange = (e) => {
    console.log("Entering password...");
  };
  return (
    <div>
      <input type="password" onChange={handlePasswordChange} />
    </div>
  );
}

// needs input type field to capture input
// add event handler for input
// on input add onChange event
// console log "Entering password..."
export default Keypad;
