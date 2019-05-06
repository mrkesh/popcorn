import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Datagrid from '../../component/datagrid/datagrid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 2,
    width: '800px'
  }
});

class MovieScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

    const { classes, movies } = this.props;
    const columns = [
      { label: 'Title', property: 'title' },
      { label: 'Rating', property: 'rating' },
      { label: 'Duration', property: 'duration' }
    ];

    return (
      <Paper className={classes.paper}>
        <Datagrid 
          columns={columns}
          rows={movies} />
      </Paper>      
    );

  }
}

export default withStyles(styles)(MovieScreen);