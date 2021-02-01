import React, { Component, Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

import Peg from "../Peg/Peg";
// const colors = ["red", "yellow", "green", "blue", "black", "white"];
// const numCols = 4;

function splitIntoChunks(arr, chunk) {
  let newArr = [];
  while (arr.length > 0) {
    let tempArray;
    tempArray = arr.splice(0, chunk);
    newArr.push(tempArray);
  }
  return newArr;
}

function DisplayPegs(props) {
  const { colors, cellWidth } = props;
  return (
    <Grid container>
      {colors.map((c) => {
        return (
          <Grid item xs={cellWidth}>
            <Peg color={c}></Peg>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default class Selection extends Component {
  render() {
    const { colors, numCols } = this.props;
    const rowColors = splitIntoChunks(colors, numCols);
    const width = 12 / numCols;

    return (
      <Grid className="selection" container>
        {rowColors.map((colors) => {
          return <DisplayPegs colors={colors} cellWidth={width} />;
        })}
      </Grid>
    );
  }
}
