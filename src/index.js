import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';
import './i18n';


const Loader = () => (
    <div className="App">
    <div>loading...</div>
</div>
);


ReactDOM.render(<Suspense fallback={<Loader />}>
    <CookiesProvider>
        <App />
    </CookiesProvider>
</Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

