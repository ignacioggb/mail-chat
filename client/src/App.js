import React, { Component } from 'react';
import MailForm from './Components/Mail';
import Chat from "./Components/Chat";


class App extends Component {
  render() {
    return (
      <div className="App">
          <MailForm />
          <Chat/>
      </div>
    );
  }
}

export default App;
