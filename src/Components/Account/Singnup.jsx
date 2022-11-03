import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.js";

const Signup = () => {
	const Navigate = useNavigate();
	  const [firstName, setFirstName] = useState("");
		const [lastName, setLastName] = useState("");
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");


		// ON SUBMIT FUNCTION WE  WILL RUN ANYTIME WE HIT LOGIN BUTTON 
		const onSubmit = async (e) => {
			e.preventDefault();

			await createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// SIN
					const user = userCredential.user;
					alert(user);
					Navigate("/login");
					// ...
				})
				// TROWING AN ERROR  THE USER 
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorCode, errorMessage);
					// ..
				});
		};
       
	return (
		<>
			<div className="relative mx-2 md:mx-0 flex flex-col justify-center min-h-screen   bg-gray-50   overflow-hidden">
				<div className=" w-full  shadow-sm md:w-screen p-5 m-auto  border border-indigo-100  bg-white rounded-md lg:max-w-xl">
					<h1 className="md:text-4xl text-2xl font-Poppins text-center text-NavbarBgColor  uppercase decoration-wavy">
						Sign UP
					</h1>
					{/* FORM */}
					<form onSubmit={onSubmit} className="mt-2 p-7">
						<div className="mb-2 ">
							{/* FIRST NAME */}
							<input
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								name="firstname"
								type="text"
								required
								className="block w-full px-10 py-4 mt-2 font-Poppins text-lg  border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="First Name"
							/>
						</div>
						<div className="mb-2">
							{/* LASTNAME */}
							<input
								type="text"
								label="Last name"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
								name="lastname"
								className="block w-full px-10 py-4 mt-2 font-Poppins text-lg  border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Last Name"
							/>
						</div>
						<div className="mb-2">
							{/* EMAIL */}
							<input
								type="email"
								label="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className=" p-24 w-full px-10 py-4 mt-2 font-Poppins text-lg border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none  focus:ring focus:ring-opacity-40"
								placeholder="Email"
							/>
						</div>
						{/* PASSWORD */}
						<div className="mb-2">
							<input
								type="password"
								label="Create password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="block w-full px-10 py-4   font-Poppins text-lg mt-2  border border-gray-300  rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Password"
							/>
						</div>
						{/* SUBMIT */}
						<div className="mt-6">
							<button
								type="submit "
								className="w-full px-10 py-4 font-Poppins text-lg tracking-wide  transition-colors duration-200 transform  text-white  bg-NavbarBgColor hover:bg-indigo-700
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
					<div className="border border-NavbarBgColor w-90 mx-10 mt-5"> </div>
					{/* RETURNING HOME  */}
					<p className="text-lg font-Poppins mb-5 text-center mt-1">
						Go back
						<span className="text-indigo-600">
							<NavLink to="/"> Home </NavLink>
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Signup;
