import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import API from "./API.js";
import "../App.css";

const styles = theme => ({
    root: {
        display: 'block',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 170,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends Component {
    
  state = {
    username: "",
    email: "",
    image: "",
    instrument_id:'',
    price_hour:'',
    location:'',
    labelWidth: 0,
  };

  handleSubmit = () => {
    const user = this.state;
    API.signupteacher(user)
     .then(this.props.history.push("/"))
     .then(this.props.teachertrue())
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
      const { classes } = this.props;
      const { username, email, image, price_hour,location } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="userSignIn">
        <TextField
          //   fullWidth='true'
          id="usernameInput"
          label="Username"
          value={username}
          onChange={handleChange}
          margin="normal"
          name="username"
        />
        <br />
        <TextField
          id="emailInput"
          label="Email"
          value={email}
          onChange={handleChange}
          margin="normal"
          name="email"
        />
        <br></br>
            <br></br>
        <form  className={classes.root} autoComplete="on">
            <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-simple">Instrument</InputLabel>
                <Select
                    value={this.state.instrument_id}
                    onChange={this.handleChange}
                    input={<Input name="instrument_id" id="instrument-helper" />}>
                    <MenuItem value={1}>Guitar</MenuItem>
                    <MenuItem value={2}>Piano</MenuItem>
                    <MenuItem value={3}>Drums</MenuItem>
                        <MenuItem value={4}>Violin</MenuItem>
                        <MenuItem value={5}>Flute</MenuItem>
                        <MenuItem value={6}>Oboe</MenuItem>
                </Select>
                <FormHelperText>Please select instrument</FormHelperText>
            </FormControl>
            </form>
        <TextField
          id="imageInput"
          label="Image"
          value={image}
          onChange={handleChange}
          margin="normal"
          name="image"
        />
        <br />
            
            
            <br />
            <TextField
                id="pricehourInput"
                label="pricehour"
                value={price_hour}
                onChange={handleChange}
                margin="normal"
                name="price_hour"

            />
            <br />
            <br />
            <TextField
                id="locationInput"
                label="location"
                value={location}
                onChange={handleChange}
                margin="normal"
                name="location"

            />
            <br />
            <br/>   

        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    );
  }
}
SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleSelect)
