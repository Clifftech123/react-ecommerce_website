import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Components/assets/logo.png";


const ProductNav = () => {
	// TOGGLE
	const [ navbar, setNavbar ] = useState( false );
		const Navigate = useNavigate();

	return (
		<>
			<nav className=" w-full bg-BgColor font-light  shadow-sm">
				<div className=" justify-between  px-4 md:items-center md:flex md:px-20 font-Poppins">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							<img src={logo} alt="Logo" className="cursor-pointer  h-9" />

							{/* TOGGLE */}
							<div className="md:hidden">
								<button
									className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 "
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
							className={`flex-1  text-lg text-center pb-3 mt-8 md:block  md:pb-0 md:mt-0 ${
								navbar ? "block   " : "hidden"
							}`}
						>
							{/* NAV ITEMS */}
							<ul className="items-center  text-2xl  justify-center space-y-8 md:flex md:space-x-10  md:space-y-0  md:divide-y-0">
								<li className="  ">
									<NavLink to="/product"> Home</NavLink>
								</li>
								<li>About</li>
								<li>Contact </li>
								<button
									className=" center bg-primary text-white  hover:bg-indigo-700  p-2 w-40  m-2 rounded-lg "
									type="button"
									onClick={() => Navigate("/")}
								>
									Logout
								</button>

								<div></div>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default ProductNav;
