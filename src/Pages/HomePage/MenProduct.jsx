import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MenProductSection } from "../../Components/ItemsLinks/Items.js";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const MenProduct = () => {
    const Github = "https://github.com/Clifftech123";
		const Twitter = "https://twitter.com/Clifftech_Dev";
		const Facebook = "https://web.facebook.com/opokuisaiah.clifford";
		const Instagram = "https://www.instagram.com/opokuisaiahclifford/";

		const Navigate = useNavigate();
  return (
		<>
			<section
				id="Recommendation"
				className="  md:mr-0  bg-white font md:ml-0 mr-10 ml-10 mx-5 mt-40 md:px-20 "
			>
				<div className="grid h-200  gap-2 md:gap-10 lg:grid-cols-4   ">
					{MenProductSection.map((Product, name) => (
						<div
							className="w-full  mt-10  rounded-lg border-2   border-lightprimary shadow-sm  hover:shadow-lg bg-white  align-middle justify-center  lg:max-w-md     relative overflow-hidden  "
							key={name}
						>
							<span className="">
								<img
									className="object-cover w-full h-80  object-center hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={Product.img}
									alt="imag"
								/>
							</span>
							<div className="p-4   ">
								<h4 className="text-2xl  font-bold   text-gray-700  ">
									{Product.amountMoney}
									<span className=" ml-20"> </span>
								</h4>
								<p className=" leading-normal      mt-5  text-gray-600  text-lg ">
									{Product.content}
								</p>

								<button
									type="button"
									className=" text-gray-500 font-semibold  mt-5 text-xl "
									onClick={() => Navigate("/login")}
								>
									See all
								</button>
								{/* SOCIAL ICONS */}
								<span className="flex justify-between mt-5  font-bold align-bottom  text-white     text-xl ">
									<li title="Github" className="   block  ">
										<a href={Github} target={"_blank"} rel="noreferrer">
											<FaGithub />
										</a>
									</li>
									<li title="tWitter" className=" block   ">
										<a href={Twitter} target={"_blank"} rel="noreferrer">
											<FaTwitter />
										</a>
									</li>
									<li title="Facebook" className=" block  ">
										<a href={Facebook} target={"_blank"} rel="noreferrer">
											<FaFacebook />
										</a>
									</li>
									<li title="Instagram" className=" block ">
										<a href={Instagram} target={"_blank"} rel="noreferrer">
											<FaInstagram />
										</a>
									</li>
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default MenProduct
