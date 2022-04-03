import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { greetingPrefix } from './config';

ReactDOM.render(
    <BrowserRouter>
        <App greetIngPrefix={greetingPrefix} />
    </BrowserRouter>,
    document.getElementById('root')
);
