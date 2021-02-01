import React, { useState, useEffect } from "react";
import Brightness1Icon from "@material-ui/icons/Brightness1";

const Peg = (props) => {
  const { color } = props;
  const [pegColor, setPegColor] = useState(color);

  useEffect((color) => {
    setPegColor(pegColor);
  }, []);

  return (
    <Brightness1Icon
      style={{ color: color, fontSize: "40px" }}
      onClick={(e) => {
        if (pegColor === "red") {
          setPegColor("green");
        } else if (pegColor === "green") {
          setPegColor("blue");
        } else {
          setPegColor("red");
        }
      }}
    />
  );
};

export default Peg;
