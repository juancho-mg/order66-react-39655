import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar/NavBar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx';

import './App.css';


const App = () => {
  //createProducts()
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
