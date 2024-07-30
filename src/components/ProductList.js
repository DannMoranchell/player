import React, { useState, useEffect } from 'react';

function ProductList({ products }) {
  const [startIndex, setStartIndex] = useState(0);
  const groupSize = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + groupSize) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const productGroup = products.slice(startIndex, startIndex + groupSize);

  return (
    <div>
      {productGroup.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
