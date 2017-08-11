import React from 'react';
// const App = () => <h1>hello</h1>
class App extends React.Component {
    render() {
        return (
            <Div>I <Heart/> React</Div>
        )
    }
}
const Div = (props) =><div>{props.children}</div>

class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
}
export default App
