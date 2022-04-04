import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { greetingPrefix } from './config';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App greetIngPrefix={greetingPrefix} />
    </BrowserRouter>
);
