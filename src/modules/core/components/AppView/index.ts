import { connect } from 'react-redux';

import actions from './actions';
import selector from './selector';
import { AppView } from './views/App';

export const App = connect(
  selector,actions
)(AppView);
