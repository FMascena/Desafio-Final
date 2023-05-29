import Routes from './Routes';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import store from './store';
import { productsFetch } from './store/modules/products/productsFetch';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    store.dispatch(productsFetch())
  }, [])
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;