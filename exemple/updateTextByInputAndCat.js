import React from 'react';
// const App = () => <h1>hello</h1>
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text',
            cat: 0
        }
    }

    updateText(e) {
        this.setState({txt: e.target.value})
    }

    updateCat(e) {
        this.setState({cat: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Text: {this.state.txt}</h1>
                <WidgetForText update={this.updateText.bind(this)}/>
                <h1>Cat: {this.state.cat}</h1>
                <WidgetForCat update={this.updateCat.bind(this)}/>
            </div>
        )
    }
}
const WidgetForText = (props) =>
    <input type="text" onChange={props.update} placeholder="Value for text"/>
const WidgetForCat = (props) =>
    <input type="number" onChange={props.update} placeholder="Value for cat" />
export default App
