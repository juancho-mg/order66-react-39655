import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {

  const onAdd = (contador) => { //Agregar al carrito 
    console.log(contador)
    console.log(item)
}

  return (
    <div className='row g-0 justify-content-center'>
      <div className='col-md-4'>
        <img src={item.img} alt={`Imagen de ${item.model}`} className='img-fluid rounded-start'/>
      </div>
      <div className='col-md-8'>
        <div className="card-body">
          <h5 className='card-title'>{item.model}</h5>
          <p className='card-text'>Marca:{item.brand}</p>
          <p className='card-text'>#Item: {item.id}</p>
          <p className='card-text'>Precio: €{item.price}.-</p>
          <p className='card-text'>Stock: {item.stock}</p>
          <p className='card-text'>Descripcion:</p>
          <p className='card-text'>{item.description}</p>
          <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
