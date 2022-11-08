import React from 'react'
import { useNavigate } from 'react-router-dom';
import { WomenProductLinks } from "../../Components/ItemsLinks/Items.js";
import DescriptionTwo from './DescriptionTwo.jsx';


const WomenProduct = () => {


    
    const Navigate = useNavigate();

  return (
		<>
			{/* RENDING THE DESCRIPTION 2 FROM THE THE DESCRIPTIONTWO  COMPONENT */}
			<section id="DescriptionTwo">
				<DescriptionTwo />
			</section>

			<section
				id="Recommendation"
				className="   md:mr-0  md:ml-0 mr-10 ml-10 mt-20  md:px-20    "
			>
				<div className="  h-200 grid gap-2 md:gap-10 lg:grid-cols-4  ">
					{WomenProductLinks.map((Product, name) => (
						<div
							className="w-full  mt-10  rounded-lg md:shadow-sm  border-2   border-lightprimary md:hover:shadow-lg   align-middle justify-center   lg:max-w-md  bg-white  relative overflow-hidden   "
							key={name}
						>
							<img
								className="object-cover w-full h-80   object-center hover:scale-110 transition duration-300 ease-in-out bg-transparent  "
								src={Product.img}
								alt="imag"
							/>
							<div className="p-4   ">
								<h4 className="text-2xl  font-bold mb-5 font-Poppins  text-gray-700    ">
									{Product.WomenPrice}
									<span className=" ml-20"> </span>
								</h4>
								<p className="mb-2 leading-normal text-lg  text-gray-600  ">
									{Product.content}
								</p>

								<button
									type="button"
									className="  text-gray-500 font-semibold mt-5 text-xl font-Poppins"
									onClick={() => Navigate("/login")}
								>
									See all
								</button>
								{/* SOCIAL ICONS */}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default WomenProduct

