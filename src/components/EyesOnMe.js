// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  const handleFocusEvent = () => {
    console.log("Good!");
  };

  const handleBlurEvent = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <button className="button" onFocus={handleFocusEvent} onBlur={handleBlurEvent}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
