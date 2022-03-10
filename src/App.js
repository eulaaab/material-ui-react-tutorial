import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<SaveIcon />}
          size="large"
          style={{ fontSize: 20 }}
          variant="contained"
          color="secondary"
          href="#"
        >
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
