import './App.css';
import Feauture from './components/Feauture';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Offer from './components/Offer';
import Products from './components/Products';
import './components/styles/style.css';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
      <h1 style={{display: "none"}}>My internet shop</h1>
      <Header />
      <Main />
      <Offer />
      <Products />
      <Feauture />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
