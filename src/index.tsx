import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { greet } from './utilities/greet';

ReactDOM.render(
    <BrowserRouter>
        <App greet={greet} />
    </BrowserRouter>,
    document.getElementById('root')
);
