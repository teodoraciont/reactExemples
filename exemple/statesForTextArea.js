/**
 * Created by teodoraciont on 10/08/2017.
 */
import React from 'react';
// const App = () => <h1>hello</h1>
class App extends React.Component {
    constructor() {
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({currentEvent: e.type})
    }

    render() {
        return (
            <div>
                <textarea
                    cols="30" rows="10"
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}
export default App
