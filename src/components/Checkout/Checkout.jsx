import { useRef } from "react"
import { useCarritoContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { getProduct, updateProduct } from "../../firebase/firebase"
export const Checkout = () => {

    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const consultarForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        console.log(datForm)
        const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple
        
        const aux = [...carrito]
        //Recorrer mi carrito y descontar el stock
        aux.forEach(prodCarrito => {
          getProduct(prodCarrito.id).then(prodBDD => {
            if(prodBDD.stock >= prodCarrito.quantity){
              prodBDD.stock -= prodCarrito.quantity
              updateProduct(prodCarrito.id, prodBDD)
            }else{
              console.log("el stock no es mayor o igual que la cantidad que quiere comprar")
            }
          })
        })


    



        e.target.reset() //Reset form
    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={consultarForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repetir Email</label>
                                <input type="email" className="form-control" name="emailRepetido" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dni" className="form-label">DNI</label>
                                <input type="number" className="form-control" name="dni" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                                <input type="number" className="form-control" name="celular" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="direccion" />
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>
                    </div>

            }

        </>

    )
}