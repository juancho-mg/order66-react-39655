// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "order66-react-39655.firebaseapp.com",
  projectId: "order66-react-39655",
  storageBucket: "order66-react-39655.appspot.com",
  messagingSenderId: "359104845375",
  appId: "1:359104845375:web:02a2865559fa778857ca8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar BDD
const bdd = getFirestore()

/*
CREATE
READ
UPDATE
DELETE
*/

//CREATE PRODUCTOS

export const createProducts = async () => {
  const promise = await fetch('./json/catalogue.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
    await addDoc(collection(bdd, "productos"), {
      item: prod.item,
      category: prod.category,
      type: prod.type,
      brand: prod.brand,
      model: prod.model,
      color: prod.color,
      size: prod.size,
      wheelSize: prod.wheelSize,
      price: prod.price,
      stock: prod.stock,
      img: prod.img,
      description: prod.description,
    })
  })
}

export const getProducts = async () => {
  const prods = await getDocs(collection(bdd, "productos"))
  const items = prods.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProduct = async (id) => {
  const prod = await getDoc(doc(bdd, "productos", id))
  const item = { ...prod.data(), id: prod.id }
  return item
}

export const updateProduct = async(id, info)=>{
  const estado = await updateDoc(doc(bdd, "productos", id), info)
  console.log(estado)
}

export const deleteProduct = async (id)=> {
  const estado = await deleteDoc(doc(bdd, "productos", id))
  return estado
}

// Create y Read Orden de compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
    cliente: cliente,
    items: carrito,
    precioTotal: precioTotal,
    fecha: fecha,
  })
  console.log(ordenCompra)
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  console.log(item)
}

