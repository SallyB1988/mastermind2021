import React from "react";
import { Grid } from "@material-ui/core";
import Selection from "../Selection/Selection";

// const colors = ["red", "yellow", "green", "blue", "black", "white"];

function GameBoard() {
  return (
    <Grid className="gameBoard" container spacing={3}>
      <Grid item xs={8}>
        <h3>playing board with size section goes here</h3>
      </Grid>
      <Grid item xs={4}>
        <Selection numCols={5} />
      </Grid>
    </Grid>
  );
}

export default GameBoard;
