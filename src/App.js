import { Provider } from 'react-redux';
import './App.css';
import Feauture from './components/Feauture';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Offer from './components/Offer';
import Products from './components/Products';
import './components/styles/style.css';
import Subscribe from './components/Subscribe';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Offer />
      <Products />
      <Feauture />
      <Subscribe />
      <Footer />
    </Provider>
  );
}

export default App;
