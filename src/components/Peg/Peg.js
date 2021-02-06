import React, { useState, useEffect } from "react";
import Brightness1Icon from "@material-ui/icons/Brightness1";

const Peg = ({ color, onClick }) => {
  const [pegColor, setPegColor] = useState(color);

  useEffect((color) => {
    setPegColor(pegColor);
  }, []);

  return (
    <Brightness1Icon
      style={{ color: color, fontSize: "40px" }}
      onClick={() => onClick(color)}
    />
  );
};

export default Peg;
