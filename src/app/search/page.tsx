'use client';

import { useSearchParams } from 'next/navigation';
// import React from 'react';

const SearchPage: React.FC = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('keyword');
    const term = searchParams.get('term');

    return <h1>Search Results for : {search} {term}</h1>;
};

export default SearchPage;
