import React from 'react';
import { times } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  btn: {
    display: 'block',
    marginTop: theme.spacing.unit
  },
  form: {
    margin: theme.spacing.unit * 3,
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 2,
    width: '400px'
  }
});

class StartScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear()
    }

    this.arr = times(this.state.year - 1990, (n) => {
      return this.state.year - n;
    });
  }

  handleChange = event => {

  };
  
  render() {

    const { classes, onSelection } = this.props;

    return (
      <Paper className={classes.paper}>
        <form onSubmit={onSelection.bind(this, this.state.year)} className={classes.form}>
          <FormControl required fullWidth>
            <InputLabel htmlFor="year">Year</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleChange}
              input={<Input name="year" id="year" />}
            >
              {this.arr.map(year => <MenuItem key={year} value={year}>{year}</MenuItem> )}
            </Select>
          </FormControl>
          <Button
            className={classes.btn}
            color="primary"
            variant="contained"
            type="submit"
          >
            Grab popcorn!
          </Button>  
        </form>  
      </Paper>      
    );

  }
}

export default withStyles(styles)(StartScreen);