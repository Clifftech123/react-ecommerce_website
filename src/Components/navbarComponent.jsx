import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBarComponent = () => {
	// TOGGLE
	const [navbar, setNavbar] = useState(false);
	const Navigate = useNavigate();
	return (
		<>
			{/*================ START  NAVBAR COMPONENT ========================*/}
			<nav className="   w-full bg-white shadow -sm">
				<div className="      justify-between  px-4 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8 font">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							<h2 className="  text-2xl  font-Poppins  text-LogoColor ">
								Adom.com
							</h2>

							{/* TOGGLE */}
							<div className="md:hidden">
								<button
									className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1  text-lg    text-center pb-3 mt-8 md:block  md:pb-0 md:mt-0 ${
								navbar ? "block   " : "hidden"
							}`}
						>
							<ul className="items-center   text-2xl  justify-center space-y-8 md:flex md:space-x-10  md:space-y-0  md:divide-y-0">
								<li className="  ">Home</li>
								<li className=" "> Phones </li>
								<li className=" "> Food </li>
								<li className=""> Cloths</li>
								<li className=" "> Dashboard</li>
								<div>
									{/* Social links it automatically hidden in the small device  */}
									<ul className=" hidden text-2xl  mt-5 ml-20   md:ml-40   text-center  md:flex justify-end  md:mt-0   md:space-x-6 md:space-y-0">
										<div className="m-2 ">
											<span>
												<button
													className=" bg-bntColor p-2 w-40  m-2 rounded-lg   text-white"
													onClick={() => Navigate("/login")}
													type="button"
												>
													Login{" "}
												</button>
											</span>
											<span>
												<button
													className="  bg-bntColor p-2  m-2 rounded-md  w-40  text-md  text-white round"
													onClick={() => Navigate("/Signup")}
													type="button"
												>
													Signup
												</button>
											</span>
										</div>
										<li className="p-4">
											<FaGithub />
										</li>
										<li className="p-4">
											<FaGithub />
										</li>
									</ul>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			{/* END OF NAVBAR COMPONENT */}
		</>
	);
};

export default NavBarComponent;
