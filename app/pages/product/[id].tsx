// app/pages/product/[id].tsx

import { useRouter } from 'next/router';
import React from 'react';
import { phdetectorDatas } from '@/app/Data';

const ProductPage = ({ product: { name, type, supply } }) => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <p>Loading...</p>; // Optional loading state
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Type: {type}</p>
            <p>Supply: {supply}</p>
        </div>
    );
};

export async function getStaticPaths() {
    console.log("data found")
    const paths = phdetectorDatas.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const productId = parseInt(params.id, 10);
    const product = phdetectorDatas.find((p) => p.id === productId);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
}

export default ProductPage;
