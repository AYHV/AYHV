'use client';

import { useParams } from 'next/navigation';
// import React from 'react';

const ProductPage: React.FC = () => {
    const params = useParams();
    const { id } = params;
    return <h1>Product ID: {id}</h1>;
};

export default ProductPage;
