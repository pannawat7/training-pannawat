import React from 'react'
import Layout from '../components/Layout';

const Products = () => {

  const products = [
    { name: "Basic React Native", time: 5, price: 7500, imageUrl: "./image/basic-react-native.png"},
    { name: "Power BI Dashboard", time: 4, price: 5500,imageUrl: "./image/powerbi-dashboard.png"},
    { name: "UI Design with Figma", time: 3, price: 5000, imageUrl: "./image/ui-design-with-figma.png"},
    { name: "Cross Platform with Flutter", time: 5, price: 6500,  imageUrl: "./image/cross-platform-with-flutter.png"},
  ];
  

  return (
    <body className="bg-yellow-50">
    <Layout>
  
  <h1 className="font-bold text-4xl text-blue-950 text-left mb-4 ">หลักสูตรที่เปิดสอน</h1>
  <hr className="w-full mb-6 border-t-2 border-gray-300"/> 
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          name={product.name}
          time={product.time}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>

    </Layout>
    </body>
  )
}

const ProductCard = ({ name, time, price, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-50 object-cover"/>
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-500 mb-4">ระยะเวลา (วัน): {time}</p>
        <h3 className="text-gray-800 font-semibold text-lg mb-2">ราคา {price} บาท</h3>
      </div>
    </div>
  );
};

export default Products