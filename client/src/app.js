import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StartScreen from './view/start-screen/start-screen';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <main>
        <CssBaseline />
        <StartScreen />
      </main>
      
    );

  }
}