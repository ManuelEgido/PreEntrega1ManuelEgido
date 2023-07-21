import React from 'react';
import Item from '../Item';
import FetchData from '../../CustomHooks/FetchData';

const ItemListContainer = () => {
  //const [productos, setProductos] = useState([]);
  const data  = FetchData("https://fakestoreapi.com/products")

  return (
    <>
      {
        //console.log(data)
        data.map((id,title) => { return <Item title={title} /> })
      }
    </>
  );
};

export default ItemListContainer;