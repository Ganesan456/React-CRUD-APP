import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPageLayout/MainPage';


class App extends Component {
    render() {
       return (
           <div className="App">
              <MainPage></MainPage>             
           </div>
        );
     }
}
export default App;