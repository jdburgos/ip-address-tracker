/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Card } from './Card';

describe('Card', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Card className="test-class">
        <div>Card</div>
      </Card>,
      div,
    );
  });
});
