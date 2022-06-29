import React from 'react';

export default class Divider extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <div style={{
                backgroundColor:'#FCFBFA',
                paddingTop:20,
                paddingBottom:20
            }}>{this.props.title}</div>
        );
    }
}