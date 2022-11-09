import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from  '../Firebase/Firebase'
import { NavLink, useNavigate } from "react-router-dom";
const Logins = () => {

	
	   const Navigate = useNavigate();
			const [email, setEmail] = useState("");
	const [ password, setPassword ] = useState( "" );
           
			// ON LOGINS FUNCTION 
			const onLogin = (e) => {
				e.preventDefault();
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed in
						const user = userCredential.user;
						Navigate("/product");
						console.log(user)
						   
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						 alert (errorCode, errorMessage);
					});
			};
	return (
		<>
			<div className="h-full relative mx-2  flex  justify-center min-h-screen overflow-hidden   bg-BgColor items-center  sm:px-6 lg:px-8">
				<div className="max-w-md  py-10  px-15 shadow-sm border-2   border-lightprimary  bg-white w-full space-y-5">
					<div>
						<h2 className=" text-center text-2xl  md:text-3xl mt-5 mb-0 font-Poppins text-gray-900">
							Sign in to your account
						</h2>
					</div>
					{/* FORM */}
					<form className="mt-2 p-10  space-y-6">
						<div className="rounded-md  p-30  ">
							{/* EMAIL */}
							<input
								id="email-address"
								name="email"
								type="email"
								required
								className=" text-lg  font-Poppins relative block
                              w-full px-10 py-5 border border-gray-300
                             placeholder-gray-500 text-gray-900 rounded-lg
                              focus:outline-none focus:ring-indigo-500
                            focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								onChange={(e) => setEmail(e.target.value)}
							/>
							{/* PASSWORD */}
							<div className="">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className=" text-lg font-Poppins  mt-5  relative block
                                w-full px-10 py-4 border border-gray-300
                               placeholder-gray-500 text-gray-900  rounded-lg
                               focus:outline-none focus:ring-indigo-500
                               focus:border-indigo-500 focus:z-1 sm:text-sm"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{/* LOGINS BUTTON  */}
						<div>
							<button
								onClick={onLogin}
								type="submit"
								className="group relative w-full flex justify-center
                                 py-2 font-Poppins text-lg px-4 border border-transparent  font-medium
                                  rounded-md text-white   bg-indigo-600  hover:bg-indigo-700
                                 focus:outline-none focus:ring-2 focus:ring-offset-2
                               focus:ring-indigo-500"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className=" text-lg font-Poppins mb-5 text-center text-gray-700">
						I don't have account ?{" "}
						<span className="text-primary">
							<NavLink to="/signup"> Sing Up </NavLink>
						</span>
					</p>
					<div className="border border-NavbarBgColor w-90 mx-10 "> </div>
					{/* RETURNING HOME  */}
					<p className="text-lg font-Poppins mb-5 text-center ">
						Go back
						<span className="text-primary">
							{" "}
							<NavLink to="/"> Home </NavLink>
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Logins;
