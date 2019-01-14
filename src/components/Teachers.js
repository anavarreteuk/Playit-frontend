import React, { Component } from "react";
import ComplexGrid from "./ComplexGrid.js";
import MapContainer from "./MapContainer.js";
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
    inputValue: this.props.cardValue
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filteredTeachers = () => {
    const allTeachers = this.props.teachers;
    var regex = new RegExp(this.state.inputValue, "ig");

    return allTeachers.filter(teacher =>
      teacher.instrument.name.match(regex))
    ;
  };

  render() {
    const { classes } = this.props;
    
    return <div className="teachersAndMap">
        <div className="teachers">
          <form className={classes.container} noValidate autoComplete="off">
            <TextField autoFocus={true} fullWidth={true} id="outlined-with-placeholder" label="What would you like to learn?" placeholder="Placeholder" className={classes.textField} margin="normal" variant="outlined" onChange={this.handleChange} name="inputValue" value={this.state.inputValue} />
          </form>
          <div className="wrapper">
            {this.filteredTeachers().map(teacher => (
              <div className="inditem" key={teacher.id}>
                <ComplexGrid
                  callAvailabilities={this.props.callAvailabilities}
                  handleClick={this.props.handleClick}
                  key={teacher.id}
                  teacherObj={teacher}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="map">
          <MapContainer geolocation={this.props.geolocation} teachers={this.filteredTeachers()} />
        </div>
      </div>;
  }
}

export default withStyles(styles)(Teachers);
