//Recibe un array de productos y a cada uno lo transforma en un componente dada una plantilla Item
import Item from "../Item/Item";
const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map(producto => <Item key={producto.id} item={producto}/>)}
    </>
  );
}

export default ItemList;
