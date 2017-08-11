import React from 'react';
// const App = () => <h1>hello</h1>
class App extends React.Component {
    render() {
        return (
            <Title  text="dddsfdegrtytuytuyuy"/>
        )
    }
}
const Title = (props) => <h1>title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if (!(propName in props)) {
            return new Error('missing ${propName}')
        }
        if (props[propName].length < 6) {
            return new Error('length is not accepted (too short)!')
        }
    }
};
export default App
