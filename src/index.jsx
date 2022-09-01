import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Game from './components/Game';
import './Style.css';

function Hello() {

  return (
    <BrowserRouter>
      <Game />
    </BrowserRouter>
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Hello />);