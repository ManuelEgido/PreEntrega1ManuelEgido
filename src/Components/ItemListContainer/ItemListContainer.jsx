import React from 'react';

const ItemListContainer = ({greetings}) => {
  
  return (
    <div style={{height:'90vh', backgroundColor:'#6c757d'}}>
     <h1 style={{color:'white'}}>{greetings}</h1>
    </div>
  );
};

export default ItemListContainer;