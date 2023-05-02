import { useCount } from "../../hooks/useCount.js"

const ItemCount = ({ ValInicial, min, max }) => {

  const {count, increase, decrease, reset} = useCount(ValInicial, min, max)

  return (
    <div>
      <button className="btn btn-dark" onClick={() => decrease()}>-</button>
      {count}
      <button className="btn btn-dark" onClick={() => increase()}>+</button>
      <button className="btn btn-dark" onClick={() => reset()}>Reset</button>
      <button className="btn btn-light">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount;
