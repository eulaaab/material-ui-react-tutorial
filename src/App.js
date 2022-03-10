import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { ButtonGroup, FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabelController from "@material-ui/core/FormControlLabel";
import Delete from "@material-ui/icons/Delete";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          color="primary"
        />
      }
      label="Checkbox Label"
    />
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
            size="large"
            style={{ fontSize: 20 }}
            href="#"
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size="large"
            style={{ fontSize: 20, marginLeft: 10 }}
            href="#"
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
