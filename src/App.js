import React from 'react';
import './App.css';
import active from './es-six-lectures/arrow-functions/arrow-functions3.5'

class App extends React.Component {
  componentDidMount(){
    active()
  }
  render(){
    return (
      <div className="App" style={{marginTop: '50vh', color:'darkGreen'}}>
        Tyler's App Runs ES6 Code! <br/>
        See Console for ES6 Code :)
      </div>
    );
  }
}

export default App;
