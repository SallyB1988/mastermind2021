import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import GameBoard from "./components/GameBoard/GameBoard";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <GameBoard />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectColor: (color) => dispatch({ type: "SELECT_COLOR", payload: color }),
});

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    submit: state.submit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
