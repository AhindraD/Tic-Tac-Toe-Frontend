import ReactDOM from 'react-dom/client';
import Game from './components/Game';
import './Style.css';

function Hello() {

  return (
    <Game />
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Hello />);