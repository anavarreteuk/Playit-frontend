import React, { Component } from "react";
import ComplexGrid from "./ComplexGrid.js";
import Map from "./Map.js";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";

import "../App.css";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 500
  }
});

class Teachers extends Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filteredTeachers = () => {
    const allTeachers = this.props.teachers
    return allTeachers.filter(teacher => teacher.username.includes(this.state.inputValue))
  }

  render() {
    const { classes } = this.props;
    console.log(this.filteredTeachers())
    return (
      
      <div className="teachersAndMap">
        <div className="teachers">
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              fullWidth={true}
              id="outlined-with-placeholder"
              label="What would you like to learn?"
              placeholder="Placeholder"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
              name="inputValue"
            />
          </form>
          {
              this.filteredTeachers().map( teacher => <ComplexGrid key={teacher.id} teacherObj= {teacher} />)
          }          
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Teachers);
