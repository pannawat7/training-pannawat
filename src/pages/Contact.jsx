import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <body className="bg-yellow-50">
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 text-left mb-4">ติดต่อ</h1>
      <hr className="w-full mb-6 border-t-2 border-gray-300"/>
          <h2 className="text-2xl font-semibold text-gray-800">NVC Training Center</h2>
          <p className="text-gray-700 mb-3 mt-8">Address : 90 Tesa Rd, Mueng, Nakhon Pathom, 73000</p>
          <p className="text-gray-700 mb-3 mt-3">Tel : 034-252790</p>
          <p className="text-gray-700 mb-3 mt-3">E-mail : admin@nvctrainingcenter.com</p>
    </Layout>
          
    </body>
  );
}

export default Contact;
