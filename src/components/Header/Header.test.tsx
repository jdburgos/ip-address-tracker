/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Header } from './Header';

describe('Header', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Header />, div);
  });
});
