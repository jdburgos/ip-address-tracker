/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import App from './App';

describe('App', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });
});
