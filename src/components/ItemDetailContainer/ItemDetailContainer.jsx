//Consulta un unico producto de la base de datos
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const [item, setItem] = useState([])
  const {id} = useParams()
  useEffect(()=> {
    getProduct(id).then(prod => setItem(prod))
  }, [])
  return (
    <div className="card mb-3 container itemDetail d-flex justify-content-around">
      <ItemDetail item={item}/>
    </div>
  );
}

export default ItemDetailContainer;
