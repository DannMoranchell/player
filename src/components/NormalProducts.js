import React, { useEffect, useState } from 'react';

function NormalProducts({ products }) {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 5));
    }, 5000); // Change group every 5 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const currentGroup = products.slice(currentGroupIndex * 5, (currentGroupIndex + 1) * 5);

  return (
    <div className="flex flex-col space-y-4">
      {currentGroup.map((product, index) => (
        <div key={index} className="p-3 bg-blue-100 rounded shadow flex items-center space-x-4">
          <img src={product.image} alt={product.name} className="w-28 h-20 object-cover rounded" />
          <div>
            <h3 className="text-center font-semibold">{product.name}</h3>
            <p className="text-center text-gray">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NormalProducts;
