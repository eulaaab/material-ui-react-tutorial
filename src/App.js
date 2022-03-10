import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { ButtonGroup } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    marginBottom: 10,
    borderRadius: 15,
    color: "white",
    padding: "10px 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 30,
      marginBottom: 10,
    },
    h6: {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function ButtonStyle() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>;
}

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
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            {/* making it  div component */}
            <Typography variant="h2" component="div">
              Material UI Tutorial
            </Typography>
            <Typography variant="h6">Brushing up on Material UI</Typography>
            <ButtonStyle />
            <TextField
              variant="outlined"
              color="secondary"
              placeholder="test@test.com"
              label="email"
            />
            <TextField variant="filled" color="secondary" type="date" />
            <TextField
              variant="outlined"
              color="secondary"
              type="time"
              label="Time"
            />
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
