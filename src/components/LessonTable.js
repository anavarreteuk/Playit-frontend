import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class LessonTable extends React.Component {

    render() {
      
       console.log(this.props.studentLessons.lessons)
        const { classes } = this.props;
        return <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead style={{ backgroundColor: "red" }}>
                <TableRow>
                  <CustomTableCell>Date</CustomTableCell>
                  <CustomTableCell>Time</CustomTableCell>
                  <CustomTableCell align="right">
                    Duration
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    Teacher
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.studentLessons.lessons.map(row => {
                  return <TableRow key={row.id}>
                      <CustomTableCell component="th" scope="row">
                        {row.date}
                      </CustomTableCell>
                      <CustomTableCell component="th" scope="row">
                        {row.availability.time}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {row.availability.duration}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {row.teacher.username}
                      </CustomTableCell>
                    </TableRow>;
                })}
              </TableBody>
            </Table>
          </Paper>;



    }
}
LessonTable.propTypes = {
    classes: PropTypes.object.isRequired,
};
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

export default withStyles(styles)(LessonTable);
