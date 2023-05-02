//Recibe un objeto y lo devuelve en forma de componente con esta plantilla

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import './Item.css';

function Item({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} alt={`Imagen de ${item.model}`} />
      <Card.Body>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>Marca: {item.brand}</Card.Text>
        <Card.Text>Tipo: {item.type}</Card.Text>
        <Card.Text>Precio: €{item.price}.-</Card.Text>
        <Card.Text>Stock: {item.stock}</Card.Text>
        <div className='cardButton'>
        <Link className='nav-link' to={`/product/${item.id}`}><Button variant="dark">Ver Articulo</Button></Link>  
        </div>
        </Card.Body>
    </Card>
  );
}

export default Item;