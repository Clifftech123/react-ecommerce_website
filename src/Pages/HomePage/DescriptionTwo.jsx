import React from 'react'
import SecondContent from "../../Components/assets/SecondConttent.svg";

const DescriptionTwo = () => {
  return (
		<>
			<div className="grid gap-2 mt-10 md:mt-10    bg-BgColor lg:grid-cols-2  ">
				<div className="md:hidden  mt-10">
					{/* IMAGE SHOWING IN PHONE AND TABLET MODE */}
					<img className=" w-full " src={SecondContent} alt="" />
				</div>
				<div className="lg:mt-40 lg:px-40">
					<div className=" px-10">
						<h1 className=" font-Poppins mb-5  tracking-wide  text-gray-700 text-3xl  md:text-4xl md:mb-5 font-bold">
							Managing Your Online Store
						</h1>
						<p className="md:text-2xl  text-gray-700  tracking-wide  mb-10 text-lg  ">
							Obviously, there are many advantages of selling online, and the
							ability to control every facet of your online business is crucial
							to success in the long term.
						</p>
					</div>
				</div>
				{/* IMAGE SHOWING IN LARGE  MODE  */}
				<div className=" hidden md:block lg:p-20">
					<img className=" w-full " src={SecondContent} alt="" />
				</div>
			</div>
		</>
	);
}

export default DescriptionTwo
