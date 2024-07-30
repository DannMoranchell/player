import React from 'react';
import VideoCarousel from './components/VideoCarousel';
import ImageCarousel from './components/ImageCarousel';
import NormalProducts from './components/NormalProducts';
import SpecialProduct from './components/SpecialProduct';
import data from './data.json';

function App() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 h-screen gap-2">
      <div className="col-span-1 row-span-4 bg-black-100 p-4 overflow-y-auto">
        <NormalProducts products={data.normalProducts} />
      </div>
      <div className="col-span-3 row-span-3 bg-black-30 p-1">
        <VideoCarousel videos={data.videos} />
      </div>
      <div className="col-span-1 row-span-1  bg-black-50 p-1">
        <ImageCarousel images={data.images} />
      </div>
      <div className="col-span-2 row-span-1 bg-blue-100 p-1 flex items-center justify-center">
        <SpecialProduct products={data.specialProducts} />
      </div>
    </div>
  );
}

export default App;
