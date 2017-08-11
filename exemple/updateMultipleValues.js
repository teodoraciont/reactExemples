import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => <h1>hello</h1>
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: '',
            b: '',
            c: ''
        }
        this.update = this.update.bind(this)
    }

    update() {
        let valueForA, valueForB, valueForC, valueForConcat;
        valueForA = this.a.refs.input.value;
        valueForB = this.b.value;
        valueForC = this .c.value;
        valueForConcat = valueForA + '  |  ' + valueForB + '  |  ' + valueForC;
        this.setState({
            a: valueForA,
            b: valueForB,
            c: valueForConcat
        })
    }

    render() {
        return (
            <div>
                <Input ref={component => this.a = component}
                       update={this.update.bind(this)}/>
                {this.state.a}
                <hr/>
                <input ref={node => this.b = node} type="text" onChange={this.update.bind(this)}/>
                {this.state.b}
                <hr/>
                <textarea ref={node => this.c = node} onChange={this.update.bind(this)}/>
                {this.state.c}
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <input ref="input" type="text" onChange={this.props.update}/>
    }
}

export default App
