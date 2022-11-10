import React from 'react'
import ImageCarousel from './ImageCarousel';
import MainProduct from './MainProduct';
import ProductNav from './ProductNav';

const Product = () => {
    return (
			<>
				<section className="font-Poppins">
					{/* REDING PRODUCT FROM THE PRODUCT COMPONENT */}
					<ProductNav />

					{/* 	// Image Carousel */}
					<ImageCarousel />

					{/*  THE MAIN PRODUCT THAT CONTAIN ALL THE PRODUCT  */}
					<MainProduct />
				</section>
			</>
		);
}

export default Product;
