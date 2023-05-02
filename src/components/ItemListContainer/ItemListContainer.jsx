import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../firebase/firebase';
import './ItemListContainer.css';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

   //OPCION CON FETCH
  useEffect(() => {

    if (categoryId) { //Consulto si me ingresaron un parametro en la URL
      getProducts()
        .then(productos => {
          const productosDisponibles = productos.filter(prod => prod.stock > 0).filter(prod => prod.type === categoryId)
          setProductos(productosDisponibles)
        })
    } else {
      getProducts()
        .then(productos => {
          const productosDisponibles = productos.filter(prod => prod.stock > 0)
          setProductos(productosDisponibles)
        })
    }


  }, [categoryId])



  return (
    <div id='itemListContainer'>
      <div className='row d-flex justify-content-around'>
        {<ItemList productos={productos} />}
      </div>
    </div>
  );
}

export default ItemListContainer;
