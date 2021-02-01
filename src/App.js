import "./App.css";
import { Container } from "@material-ui/core";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <Container className="App">
      <GameBoard />
    </Container>
  );
}

export default App;
