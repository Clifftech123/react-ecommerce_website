import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
	const Navigate = useNavigate();
	return (
		<>
			<div className="relative mx-10 md:mx-0 flex flex-col justify-center min-h-screen overflow-hidden">
				<div className=" w-full shadow-lg md:w-screen p-5 m-auto  border border-indigo-100  bg-white rounded-md lg:max-w-xl">
					<h1 className="text-4xl font-Poppins text-center text-NavbarBgColor  uppercase decoration-wavy">
						Sign UP
					</h1>
					{/* FORM */}
					<form className="mt-2 p-7">
						<div className="mb-2 ">
							{/* FIRST NAME */}
							<input
								type="text"
								className="block w-full px-10 py-4 mt-2 font-Poppins text-lg  border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="First Name"
							/>
						</div>
						<div className="mb-2">
							{/* LASTNAME */}
							<input
								type="text"
								className="block w-full px-10 py-4 mt-2 font-Poppins text-lg  border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Last Name"
							/>
						</div>
						<div className="mb-2">
							{/* EMAIL */}
							<input
								type="email"
								className=" p-24 w-full px-10 py-4 mt-2 font-Poppins text-lg border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none  focus:ring focus:ring-opacity-40"
								placeholder="Email"
							/>
						</div>
						{/* PASSWORD */}
						<div className="mb-2">
							<input
								type="password"
								required
								className="block w-full px-10 py-4   font-Poppins text-lg mt-2  border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Password"
							/>
						</div>
						{/* SUBMIT */}
						<div className="mt-6">
							<button
								type="submit "
								onClick={() => Navigate("/login")}
								className="w-full px-10 py-4 font-Poppins text-lg tracking-wide  transition-colors duration-200 transform  text-white bg-indigo-600 hover:bg-indigo-700
                             focus:outline-none focus:ring-2 focus:ring-offset-2
                             focus:ring-indigo-500 rounded-md "
							>
								Create Account
							</button>
						</div>
					</form>

					<p className="mt-8 text-lg font-Poppins  text-center text-gray-700">
						Already have an account?{" "}
						<span className="text-indigo-600">
							<NavLink to="/login"> Sign in </NavLink>
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Signup;
