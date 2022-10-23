import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div className=" bg-NavbarBgColor  mt-20">
				<div className="max-w-6xl m-auto  text-white flex flex-wrap justify-center">
					{/* FIRST  ROW */}
					<div className="p-5 w-48 ">
						<div className="text-xs uppercase text-gray-500 font-medium">
							Home
						</div>
						<a className="my-3 block" href="/#">
							Services <span className="text-white text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Products <span className="text-white text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							About Us <span className="text-white text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Pricing <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Partners <span className="text-teal-600 text-xs p-1">New</span>
						</a>
					</div>
					{/* SECOND ROW  */}
					<div className="p-5 w-48 ">
						<div className="text-xs uppercase text-gray-500 font-medium">
							User
						</div>
						<a className="my-3 block" href="/#">
							Sign in <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							New Account <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Demo <span className="text-teal-600 text-xs p-1">New</span>
						</a>
						<a className="my-3 block" href="/#">
							Career{" "}
							<span className="text-teal-600 text-xs p-1">We're hiring</span>
						</a>
						<a className="my-3 block" href="/#">
							Surveys <span className="text-teal-600 text-xs p-1">New</span>
						</a>
					</div>
					{/* THIRD ROW  */}

					<div className="p-5 w-48 ">
						<div className="text-xs uppercase text-gray-500 font-medium">
							Resources
						</div>
						<a className="my-3 block" href="/#">
							Documentation <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Tutorials <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Support <span className="text-teal-600 text-xs p-1">New</span>
						</a>
					</div>
					<div className="p-5 w-48 ">
						<div className="text-xs uppercase text-gray-500 font-medium">
							Product
						</div>
						<a className="my-3 block" href="/#">
							Our Products <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Great Deals <span className="text-teal-600 text-xs p-1">New</span>
						</a>
						<a className="my-3 block" href="/#">
							Analytics <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Mobile <span className="text-teal-600 text-xs p-1"></span>
						</a>
					</div>

					<div className="p-5 w-48 ">
						<div className="text-xs uppercase text-gray-500 font-medium">
							Support
						</div>
						<a className="my-3 block" href="/#">
							Help Center <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Conditions <span className="text-teal-600 text-xs p-1"></span>
						</a>
					</div>
					<div className="p-5 w-48 ">
						<div className="text-xs uppercase text-gray-500 font-medium">
							Contact us
						</div>
						<a className="my-3 block" href="/#">
							XXX XXXX, Floor 4 San Francisco, CA{" "}
							<span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							contact@company.com{" "}
							<span className="text-teal-600 text-xs p-1"></span>
						</a>
					</div>
				</div>
			</div>

			{/* SOCIAL ICONS  */}
			<div className="bg-NavbarBgColor pt-2  ">
				<div
					className="flex    pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
                     md:flex-row max-w-6xl"
				>
					<div className="mt-2 text-white">
						© Copyright 2020. All Rights Reserved.
					</div>
					<div className="md:flex-1   md:space-x-10 space-x-4   md:flex-row-reverse mt-2 flex-row flex">
					{/* LINKEDIN */}
						<button className="w-6  md:mx-10 mx-1">
							<span className=" text-white text-4xl   space-x-4 fill-current  hover:text-gray-400 cursor-pointer">
								<FaLinkedin />
							</span>
						</button>
						{/* FACEBOOK */}
						<button className="w-6 mx-1 ">
							<span className=" text-white text-4xl fill-current  hover:text-gray-400 cursor-pointer">
								<FaFacebook />
							</span>
						</button>
						{/* TWITTER */}
						<button className="w-6 mx-1">
							<span className=" text-white text-4xl fill-current  hover:text-gray-400 cursor-pointer">
								<FaTwitter />
							</span>
						</button>
						{/* INSTAGRAM */}
						<button className="w-6 mx-1">
							<span className=" text-white text-4xl fill-current  hover:text-gray-400 cursor-pointer">
								<FaInstagram />
							</span>
						</button>
						{/* GITHUB */}

						<button className="w-6 mx-1  space-x-4 ">
							<span className=" text-white text-4xl fill-current  hover:text-gray-400 cursor-pointer">
								<FaGithub />
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
