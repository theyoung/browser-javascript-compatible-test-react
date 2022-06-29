import React from 'react';
import './App.css';
import Container from './Container'

export default class App extends React.Component {


  componentDidMount(){

  }

  render(){
    // console.log("render Called");
    let browser = App.getBrowser();
    return (
      <div className="App">
          <h1>Javascript Coverage List</h1>
          <h3>Browser Name : {browser.name}</h3>
          <h3>Browser Version : {browser.version}</h3>
          <Container></Container>
      </div>
    );
  }


  static getBrowser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
  }
}