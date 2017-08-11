/**
 * Created by teodoraciont on 10/08/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => <h1>hello</h1>
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
        // this.update = this.update.bind(this)
    }

    componentWillMount() {
        fetch('https://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({results: items}) => this.setState({items}))
    }

    componentDidMount() {
    }

    filter(e) {
        this.setState({filter: e.target.value})
    }

    render() {
        let items = this.state.items;
        if (this.state.filter) {
            items = items.filter(
                item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )
        }
        return <div>
            <input type="text" onChange={this.filter.bind(this)}/>
            {items.map(item => <Person key={item.name} person={item}/>)}
        </div>
    }
}
App.defaultProps = {val: 0}
const Person = (props) => <h4>{props.person.name}</h4>
export default App
