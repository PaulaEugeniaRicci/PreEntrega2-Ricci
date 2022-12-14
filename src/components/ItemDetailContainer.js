import React, { useEffect, useState } from 'react';
import { products } from './data/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ( ) => {

  const { id: itemId } = useParams()
  const [item, setItem] = useState([])
  const [loading, setloading] = useState(true)

  const Loading = () => {
    return (
      <div className='flex justify-center items-center h-80'>
        <strong className='text-center'>Cargando...</strong>
      </div>
    )
  }

  useEffect(() => {
    getItemDetails().then( response => {
      console.log(response)
      setItem( response )
      setloading(false)
    })
  }, [])
  
  const getItemDetails = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products.find( p => p.id === Number(itemId) ) )
      }, 2000);
    })
  }

  return (
    <div className="">
      {loading ? <Loading/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer;