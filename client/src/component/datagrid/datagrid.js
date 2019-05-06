import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  table: {
    width: '100%'
  }
});

class Datagrid extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    const { classes, columns, rows } = this.props;

    debugger;

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(column => {
              return <TableCell>{column.label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.title}>
                {columns.map(column => {
                  return <TableCell >{row[column.property]}</TableCell>;
                })}
              </TableRow>
            )
              })}
        </TableBody>
      </Table>
    );

  }
}

export default withStyles(styles)(Datagrid);