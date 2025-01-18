import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './components/styles/style.css';

import store from './store/store';
import Shop from './components/Shop';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/basket' element={<p>Здесь будет корзина</p>} />
          <Route path='/' element={<Shop />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
