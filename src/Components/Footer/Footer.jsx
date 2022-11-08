import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	// SOCIAL ICONS LINKS
	const Github = "https://github.com/Clifftech123";
	const Twitter = "https://twitter.com/Clifftech_Dev";
	const Facebook = "https://web.facebook.com/opokuisaiah.clifford";
	const Instagram = "https://www.instagram.com/opokuisaiahclifford/";
	return (
		<>
			<section className=" bg-BgColor">
				<div className="  mt-20  ">
					<div className="max-w-6xl m-auto  bg-NavbarBgColor  text-gray-400 flex flex-wrap justify-center">
						{/* FIRST  ROW HOME */}
						<div className="p-5 w-48 ">
							<div className=" uppercase  text-gray-600 text-lg  font-Poppins  font-medium">
								Home
							</div>
							<a className="my-3 block" href="/#">
								Dashboard <span className="  text-gray-400 text-xs p-1"></span>
							</a>
							<a className="my-3 block" href="/#">
								Products <span className=" text-gray-600  text-xs p-1"></span>
							</a>
						</div>
						{/* SECOND ROW USER  */}
						<div className="p-5 w-48 ">
							<div className=" uppercase  text-gray-600 text-lg  font-Poppins font-medium">
								User
							</div>
							<a className="my-3 block" href="/#">
								Sign in{" "}
								<span className="text- text-gray-600 text-xs p-1"></span>
							</a>
							<a className="my-3 block" href="/#">
								Sing up <span className="text-teal-600 text-xs p-1"></span>
							</a>
						</div>

						{/* THIRD ROW SUPPORT */}
						<div className="p-5 w-48 ">
							<div className=" uppercase  text-gray-700 text-lg  font-Poppins font-medium">
								Support
							</div>
							<a className="my-3 block" href="/#">
								Help Center <span className="text-teal-600 text-xs p-1"></span>
							</a>
							<a className="my-3 block" href="/#">
								Privacy Policy{" "}
								<span className="text-teal-600 text-xs p-1"></span>
							</a>
						</div>

						{/* FOURTH ROW CONTACT */}
						<div className="p-5 w-48 ">
							<div className="uppercase  text-gray-700 text-lg  font-Poppins font-medium">
								Contact us
							</div>
							<a className="my-3 block" href="/#">
								007CBD, Floor 4 San Kumasi, Ghana
								<span className="text-teal-600 text-xs p-1"></span>
							</a>
							<a className="my-3 block" href="/#">
								Clifftech@gmail..com{" "}
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
						<div className="mt-2  text-gray-700 text-lg">
							© Copyright 2022. All Rights Reserved.
						</div>
						<div className="md:flex-1   md:space-x-10 space-x-4   md:flex-row-reverse mt-2 flex-row flex">
							{/* FACEBOOK */}
							<button className="w-6 mx-1  md:mx-10 " title="Facebook">
								<span className="  text-gray-700 text-4xl fill-current  hover:text-gray-400 cursor-pointer">
									<a href={Facebook} target={"_blank"} rel="noreferrer">
										<FaFacebook />
									</a>
								</span>
							</button>
							{/* TWITTER */}
							<button className="w-6 mx-1" title="Twitter">
								<span className="  text-gray-700 text-4xl fill-current  hover:text-gray-400 cursor-pointer">
									<a href={Twitter} target={"_blank"} rel="noreferrer">
										<FaTwitter />
									</a>
								</span>
							</button>
							{/* INSTAGRAM */}
							<button className="w-6 mx-1" title="Instagram">
								<span className="  text-gray-700 text-4xl fill-current  hover:text-gray-400 cursor-pointer">
									<a href={Instagram} target={"_blank"} rel="noreferrer">
										<FaInstagram />
									</a>
								</span>
							</button>
							{/* GITHUB */}
							<button className="w-6 mx-1  space-x-4 " title="Github">
								<span className=" text-gray-700 text-4xl fill-current  hover:text-gray-400 cursor-pointer">
									<a href={Github} target={"_blank"} rel="noreferrer">
										<FaGithub />
									</a>
								</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
