import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <body className="bg-yellow-50">
    <Layout>
       <div className="flex flex-col items-center px-4 py-8 ">
      <h1 className="font-bold text-4xl text-blue-950 text-left mb-4 ">หน้าหลัก</h1>
      <hr className="w-full mb-6 border-t-2 border-gray-300"/>
      <img src="./image/computer.jpg" alt="" className="w-full max-w-max object-cover mb-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"/>
    </div>
    </Layout>
          
    </body>
  );
};

export default Home;
