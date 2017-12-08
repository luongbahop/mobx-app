import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DevTools from "mobx-react-devtools";
import { Provider } from 'mobx-react';
import stores from './stores';
import {Home} from './containers';
import registerServiceWorker from './registerServiceWorker';
console.log(stores,'stores');
class App extends Component {
    render() {
        return (
            <Provider stores={stores}>
                <div className="App">
                    <Home stores={stores}/>
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
