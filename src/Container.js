import React from 'react';
import Row from './Row';
import './Container.css';
import tests from './data-es-total'
import Divider from './Divider'

export default class Container extends React.Component {
    state = {
    }

    constructor(props){
        super(props);
        // console.log("Container");

    }

    render(){
        let keys = Object.keys(this.state);
        let tags = [];
        let that = this;
        keys.forEach(key=>{
            tags.push(<Divider key={tags.length} title={key}></Divider>);
            let rows = that.state[key];
            rows?.forEach(row=>{
                tags.push(<Row key={tags.length} rowname={row.name} flag={false} value={row.mdn} obj={row}></Row>)
            });
        })

        return (
            <div className="container">
                {tags}
            </div>
        );
    }

    componentDidMount(){
        let preState ={};
        
        tests.forEach(test=>{
            preState[test.name] = test.subtests;
        })

        this.setState(preState);
    }

    doUpdate(){

    }
}