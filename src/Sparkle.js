import React, { useState } from "react";

function Sparkle() {
  // declare our initial component state
  // this a variable of 'sparkle' which is an empty string
  // we've also defined on 'addSparke' function, which
  // we'll call in our click handler
  const [sparkle, addSparkle] = useState("");

  return (
    <div>
      <button onClick={() => addSparkle(sparkle + "\u2728")}>
        Add some sparkle
      </button>
      <p>{sparkle}</p>
    </div>
  );
}

export default Sparkle;
