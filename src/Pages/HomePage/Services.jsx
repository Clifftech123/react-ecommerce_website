import React from "react";
import { Post } from "../../Components/ItemsLinks/Items";

const Services = () => {
	return (
		<>
			{/*   SERVICES  */}
			<section id="Card_section" className="">
				<div className="grid gap-2 md:gap-5 lg:grid-cols-3 mt-20   px-5 lg:px-40 ">
					{Post.map((items, key) => (
						<div
							className="w-full Lg:shadow-lg mt-10  rounded-md hover:shadow-xl hover:bg-NavbarBgColor hover:text-white align-middle justify-center  shadow-lg  lg:max-w-md  bg-white"
							key={key}
						>
							<img
								className="object-cover w-full h-48"
								src={items.img}
								alt="imag"
							/>
							<div className="p-4">
								<h4 className="text-2xl  mb-5 font-Poppins text-bntColor ">
									{items.title}
								</h4>
								<p className="mb-2  font-bold font-Roboto text-xl ">
									{items.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Services;
