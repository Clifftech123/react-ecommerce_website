import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
    const SendFuction = () => {
        return (
            alert("Thank you for your feedback. We will at it and get back  to you")
           )
    }
	return (
		<>
			<section className=" bg-BgColor ">
				<div className="relative mx-2 md:mx-0 flex  flex-col justify-center min-h-screen   ">
					<div className=" w-full   shadow-md  md:w-screen p-5 md:shadow-lg m-auto  border-1  border-lightprimary bg-white rounded-md lg:max-w-xl">
						<form>
							{/* EMAIL SECTION */}
							<div>
							
								<input
									type="email"
									label="Email address"
									required
									className="  form-control  p-24 w-full  py-4 px-5 mt-2 font-Poppins text-lg border border-gray-300  rounded-md focus:border-indigo-600 focus:ring-indigo-300 focus:outline-none  focus:ring focus:ring-opacity-40"
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

							{/* SUBMIT BUTTON  */}
							<div className="mt-6">
								<button
									onClick={SendFuction}
									type="submit "
									className="w-full hover:outline-none border-none  px-10 py-4 font-Poppins text-lg tracking-wide  transition-colors duration-200 transform  text-white focus-outline-none active-outline-none focus-border-none active-border-none  bg-primary  hover:bg-indigo-700
                                    focus:outline-none focus:ring-2 focus:ring-offset-2
                                    focus:ring-indigo-500 rounded-md "
								>
									Send
								</button>
							</div>

							<p className="text-primary mt-2">
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
