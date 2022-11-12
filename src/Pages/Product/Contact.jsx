import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
	return (
		<>
			<section className=" bg-BgColor ">
				<div className="relative mx-2 md:mx-0 flex px-10 flex-col justify-center min-h-screen   ">
					<div className=" w-full   shadow-md  md:shadow-sm md:w-screen p-20 m-auto  border-1  border-lightprimary bg-white rounded-md lg:max-w-xl">
						<form>
							{/* EMAIL SECTION */}
							<div>
								<input
									type="email"
									label="Email address"
									required
									className="  form-control p-24 w-full px-10 py-4 mt-2 font-Poppins text-lg border border-gray-300  rounded-md focus:border-indigo-600 focus:ring-indigo-300 focus:outline-none  focus:ring focus:ring-opacity-40"
									placeholder="Email"
								/>
							</div>
							<textarea
								class="
                           form-control h-40 mt-5 block  w-full  px-3 py-1.5 text-base font-normal text-gray-700  border border-solid border-gray-300 rounded  transition ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Your message"
							></textarea>
						</form>
						{/* INSTRUCTION TEXT */}

						<div className=" text-center justify-center mt-2   ">
							<small className="text-gray-500">
								Please leave us your message with us.
							</small>
							<div className="border border-NavbarBgColor w-full  mt-3">
								{" "}
							</div>
							<p className="text-primary">
								<NavLink to="/product"> Go back Home </NavLink>{" "}
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
