import React, { useEffect, useState } from 'react';

function SpecialProduct({ products }) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 10000); // Change product every 10 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h3>{products[currentProductIndex].name}</h3>
      <p>{products[currentProductIndex].price}</p>
    </div>
  );
}

export default SpecialProduct;
