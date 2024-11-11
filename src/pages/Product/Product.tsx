// src/components/Table.tsx
import React, { useState } from 'react';
import ProductTable from './ProductTable';


const Product: React.FC = () => {


    return (
        <div className="overflow-x-auto">
            <button className="px-4 py-2 bg-[#81ecec] text-black rounded mb-4">
                Create New Product
            </button>
            <ProductTable />
        </div>
    );
};

export default Product;