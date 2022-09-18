import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HomePage = () => {
	// TOGGLE 
	const [navbar, setNavbar] = useState(false);
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
								<li className="   hover:text-Navbar_text_color"> Phones </li>
								<li className=" hover:text-Navbar_text_color"> Food </li>
								<li className=""> Cloths</li>
								<li className=" "> Dashboard</li>
								<div>
									{/* Social links it automatically hidden in the small device  */}
									<ul className=" hidden text-2xl  mt-5 ml-20   md:ml-40   text-center  md:flex justify-end  md:mt-0   md:space-x-6 md:space-y-0">
										<li className=" bg-bntColor p-2 w-40 rounded-lg  text-white">
											<button type="button"> Signup </button>
										</li>
										<li className="  bg-bntColor p-2 rounded-lg  w-40  text-white round">
											<button type="button" className="">Signup</button>
										</li>
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

			{/*================ START OF  SIDEBAR COMPONENT ========================*/}
			<div className="flex">
				<div className="flex flex-col h-screen p-3 bg-white shadow w-60">
					<div className="space-y-3">
						<div className="flex items-center">
							<h2 className="text-xl font-bold">Dashboard</h2>
						</div>
						<div className="flex-1">
							<ul className="pt-2 pb-4 space-y-1 text-sm">
								<li className="rounded-sm">
									<a
										href="/"
										className="flex items-center p-2 space-x-3 rounded-md"
									>
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
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/>
										</svg>
										<span>Home</span>
									</a>
								</li>
								<li className="rounded-sm">
									<a
										href="/"
										className="flex items-center p-2 space-x-3 rounded-md"
									>
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
												d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
											/>
										</svg>
										<span>Inbox</span>
									</a>
								</li>
								<li className="rounded-sm">
									<a
										href="/"
										className="flex items-center p-2 space-x-3 rounded-md"
									>
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
												d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
											/>
										</svg>
										<span>Orders</span>
									</a>
								</li>
								<li className="rounded-sm">
									<a
										href="/"
										className="flex items-center p-2 space-x-3 rounded-md"
									>
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
												d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										<span>Settings</span>
									</a>
								</li>
								<li className="rounded-sm">
									<a
										href="/"
										className="flex items-center p-2 space-x-3 rounded-md"
									>
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
												d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
											/>
										</svg>
										<span>Logout</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="container mx-auto mt-12">
					<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
						<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
							<div className="text-sm font-medium text-gray-500 truncate">
								Total users
							</div>
							<div className="mt-1 text-3xl font-semibold text-gray-900">
								12,00
							</div>
						</div>
						<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
							<div className="text-sm font-medium text-gray-500 truncate">
								Total Profit
							</div>
							<div className="mt-1 text-3xl font-semibold text-gray-900">
								$ 450k
							</div>
						</div>
						<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
							<div className="text-sm font-medium text-gray-500 truncate">
								Total Orders
							</div>
							<div className="mt-1 text-3xl font-semibold text-gray-900">
								20k
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* END OF SLIDER COMPONENT */}
		</>
	);
};

export default HomePage;
