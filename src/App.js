import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Header from "./Container/header";
import Productlist from "./Container/Productlist";
import ProductDetail from "./Container/productDetail";
import "./App.css";
function App() {
  return (
    <div>
       <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Productlist/>}/>
        <Route  path="/product/:productId" component={ProductDetail} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
