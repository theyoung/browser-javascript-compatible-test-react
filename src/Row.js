import React from 'react';
import "./Row.css";

export default class Row extends React.Component {
    state ={
        name: "",
        value:"",
        flag:false,
        fn:"function exec(){console.log('abc');return true;}",
        message:""
    };

    constructor(props){
        super(props);
        this.props = props;
    }

    handleMouseIn() {
        this.setState({ hover: true })
    }
      
    handleMouseOut() {
        this.setState({ hover: false })
    }

    copyClipboard(){
        navigator.clipboard
        .writeText(this.state.fn.toString())
        .then(function() {
            alert("Clipboard copied");
          }, function(err) {
            alert("Clipboard copy failed : "+ err.message);
          }
        );
    }

    render(){
        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
        };
        const messageStyle = {
          display: this.state.message.length > 0 ? 'block' : 'none'
        };
        return(
        <ul className={this.state.flag? 'Row able' : 'Row disable'} >
            <li className="name" style={{cursor:'help'}} onClick={this.state.hover? this.handleMouseOut.bind(this) : this.handleMouseIn.bind(this)}>{this.state.name}</li>
            <li className="value"><a href={this.state.value} target="_blank" rel="noreferrer">link</a></li>
            <li className="value">{this.state.flag? "true" : "false"}</li>
            <li><button onClick={this.copyClipboard.bind(this)}>copy</button></li>
            <div style={tooltipStyle}>{this.state.fn.toString()}</div>
            <div style={messageStyle}>{this.state.message}</div>
        </ul>
        );
    }

    componentDidMount(){
        // this.setState({name: this.props.rowname, 
        //     value: this.props.value, 
        //     flag: this.props.flag});
        // const script = document.createElement("script");
        // script.async = true;
        // script.innerHTML = "function exec(){return 1}";
        // this.ul.appendChild(script);
        
        // console.log(`this is my script : ` + execution);
        // let concat = execution+";exec();";


        this.setState({name: this.props.rowname, 
            value: this.props.value, 
            flag: this.props.flag,
            fn:Row.testScript(this.props.obj.exec)
        });

        var asyncTestPassed = function(){this.setState({flag:true});}.bind(this);
        
        setTimeout(function(){
            let message = "";
            let result = true;
            try{
                result = eval(this.state.fn.replace(/\\"/g,'"'));
            } catch(err){
                // console.log(err.message);
                message = err.message;
                result = false;
            }
            
            console.log(result+"->"+this.state.fn.replace(/\\"/g,'"'));

            if(result || result === undefined){
                this.setState({flag:true,message:message});
            } else {
                this.setState({flag:false,message:message});
            }
        }.bind(this),Math.random() * 1000);
    }

    static testScript(fn) {
    
      function deindentFunc(fn) {
        fn = (fn+'');
        var indent = /(?:^|\n)([\t ]+)[^\n]+/.exec(fn);
        if (indent) {
          fn = fn.replace(new RegExp('\n' + indent[1], 'g'), ' ');
        }
        return fn;
      }
    
      if (!fn) {
        return '';
      }
      if (typeof fn === 'function') {
        // see if the code is encoded in a comment
        var expr = (fn+"").match(/\/\*([^]*)\*\//);
        // if there wasn't an expression, make the function statement into one
        if (expr==null) {

          expr = fn.toString();
          
          return expr+";exec();";
        } else {
          expr = deindentFunc(expr[1]);
          // expr = expr[1];

          /* jshint unused: true */ // this appears unused, but removing it might break things.
          /* jshint unused: false */
          var codeString = JSON.stringify(expr).replace(/\\r/g,' ');
          return "function exec(){"+codeString.substring(1,codeString.length-1)+"};exec();".replace(/\\"/g,'"');
          
          // return `function exec(){${codeString.substring(1,codeString.length-1)}};exec();`;
        //   return `function exec(){${codeString.replace(/["]/g,"")}}`;
        //   return `(function(){${codeString.replace(/["]/g,"")}})`;
        }
      } else {
        // it's an array of objects like the following:
        // { type: 'application/javascript;version=1.8', script: function () { ... } }
        return fn.toString();
      }
    }
      
}