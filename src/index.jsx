import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Style.css';

function Hello() {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Hello />);