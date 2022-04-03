import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { greet } from './utils/greet';

ReactDOM.render(
    <BrowserRouter>
        <App greet={greet} />
    </BrowserRouter>,
    document.getElementById('root')
);
