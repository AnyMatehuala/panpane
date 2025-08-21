import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>{greeting}</h3>
    </div>
  );
};

export default ItemListContainer;