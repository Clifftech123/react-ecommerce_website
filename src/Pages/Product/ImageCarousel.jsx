import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const ImageCarousel = () => {
	// UNLASH IMAGES
	const menShirt =
		"https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
	const menWatch = "https://images.unsplash.com/photo-1630534348698-684c4660854d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";

	const WomenPomade =
		"https://images.unsplash.com/photo-1593418632276-469e664a5a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
	
	const BlankPlain =
		"https://images.unsplash.com/photo-1622799336313-e0cf42fc6180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
	
	
	return (
		<>
			<section className="">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper flex items-center h-80   py-10"
				>
					{/* FIRST IMAGE */}
					<SwiperSlide>
						<div className="items-center opacity-75  align-middle">
							<img src={menShirt} alt="menShirt" className="w-full " />
						</div>
					</SwiperSlide>
					{/* SECOND IMAGE */}
					<SwiperSlide>
						<div className="items-center opacity-75 ">
							<img src={menWatch} alt="menShirt" className="w-full" />
						</div>
					</SwiperSlide>
					{/* THIRD IMAGE */}
					<SwiperSlide>
						<div className="items-center opacity-75">
							<img src={WomenPomade} alt="menShirt" className="w-full" />
						</div>
					</SwiperSlide>

					{/* 4 IMAGE */}
					<SwiperSlide>
						<div className="items-center opacity-75 ">
							<img src={BlankPlain} alt="menShirt" className="w-full" />
						</div>
					</SwiperSlide>

					{/* 5 IMAGE */}
				</Swiper>
			</section>
		</>
	);
};

export default ImageCarousel

