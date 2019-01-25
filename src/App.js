import React, { Component } from 'react';
import './App.css';
import CustomInput from './container/inputContainer'
import CP from './component/paragraph/cp'
import reducer from './reducer/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer)


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      common:""
    }
  }
  mutateMe = (data)=>{
    this.setState(data)
  }
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <CustomInput  />
          <CP />
        </div>
      </Provider>
    );
  }
}

export default App;
