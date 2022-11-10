import React from 'react'
import ImageCarousel from './ImageCarousel';
import ProductNav from './ProductNav';

const Product = () => {
    return (
			<>
				{/* REDING PRODUCT FROM THE PRODUCT COMPONENT */}
        <ProductNav />
        
        {/* 	// Image Carousel */}
        <ImageCarousel/>
			</>
		);
}

export default Product;
