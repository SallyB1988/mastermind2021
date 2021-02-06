import React, { Component, useState } from "react";
import { Grid } from "@material-ui/core";
import _ from "lodash";

import Peg from "../Peg/Peg";
import { connect } from "react-redux";

function splitIntoChunks(arr, chunk) {
  let newArr = [];
  while (arr.length > 0) {
    let tempArray;
    tempArray = arr.splice(0, chunk);
    newArr.push(tempArray);
  }
  return newArr;
}

class DisplayPegs extends Component {
  render() {
    const { colors, cellWidth, onClick } = this.props;
    const { selected } = this.props;
    return (
      <Grid container>
        {colors.map((c, idx) => {
          return (
            <Grid item xs={cellWidth}>
              <Peg
                key={`peg-${idx}`}
                color={c}
                onClick={() => onClick(c)}
              ></Peg>
            </Grid>
          );
        })}
        {selected &&
          selected.map((c) => {
            <Grid.Row>{c}</Grid.Row>;
          })}
      </Grid>
    );
  }
}

class Selection extends Component {
  render() {
    const { colors, numCols, selectColor } = this.props;
    const rowColors = splitIntoChunks(colors, numCols);
    const width = Math.floor(12 / numCols);

    return (
      <Grid className="selection" container>
        {rowColors.map((colors) => {
          return (
            <DisplayPegs
              colors={colors}
              cellWidth={width}
              onClick={selectColor}
            />
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  selected: state.selected,
  submit: state.submit,
  colors: state.selection.colors,
});

const mapDispatchToProps = (dispatch) => ({
  selectColor: (color) => dispatch({ type: "SELECT_COLOR", payload: color }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
