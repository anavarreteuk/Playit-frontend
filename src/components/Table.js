import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class SimpleTable extends React.Component {
     
    
    
     postLesson() {
        console.log(this.props);
        // console.log(this.props.dateone);
        //  console.log(this.row.teacher_id);
        //  console.log(this.props.studentIds);
        // console.log(this.row.id)
        return fetch("http://localhost:3000/api/v1/lessons", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                date: this.props.dateone
                    .match(/\d{2}(?=\d{4,6})|\d+/g)
                    .join("/"),
                name: "music class",
                teacher_id: this.props.all.map(value => { return value.teacher_id})[0],
                student_id: this.props.studentIds,
                availability_id: this.props.all.map(value =>{return value.id})[0]
            })
        }).then(resp => resp.json())
        .then(this.props.callers);
    }
    
    
    render(){
        
        const { classes } = this.props;
    return <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell align="right">Day</TableCell>
              <TableCell align="right">Availability</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.all.map(row => {
              return <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.time}
                  </TableCell>
                  <TableCell align="right">{row.duration} minutes</TableCell>
                  <TableCell align="right">{row.day}</TableCell>
                  <TableCell align="right">{row.booked ? "Unavailable" : "Available"} {row.booked ? '' : <button onClick={()=>this.postLesson()}>Book a lesson</button> }</TableCell>
                  
                </TableRow>;
            })}
          </TableBody>
        </Table>
      </Paper>;


   
}
}
SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});
export default withStyles(styles)(SimpleTable);
