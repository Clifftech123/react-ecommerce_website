import React from 'react'
import SecondContent from "../../Components/assets/SecondConttent.svg";
import FirstContent from "../../Components/assets/fFirstContetn.svg";

const Description = () => {
  return (
		<>
			{/*====================== CONTENT  SITE  DESCRIPTION WITH IMAGE SECTION  ========================  */}
			{/* FIRST ROW  */}
			<section id="Content" className="bg-NavbarBgColor ">
				<div className="grid gap-2  lg:grid-cols-2 mt-20 ">
					<div className="md:p-20 ">
						<img className="w-full " src={FirstContent} alt="" />
					</div>
					<div className="md::mt-40 md:px-40 ">
						<div className="md:py-60 px-10 py-10">
							<h1 className=" font-Poppins mb-5  text-gray-200  text-3xl  md:text-4xl md:mb-5 font-bold">
								Online selling and buy
							</h1>
							<p className="md:text-2xl  font-Roboto  text-white text-lg tracking-wide ">
								Online shopping is convenient. It couldn’t be any more
								comfortable. All you need is a working computer, an internet
								connection and some money.
							</p>
						</div>
					</div>
				</div>

				{/* SECOND ROW  */}

				<div className="grid gap-2 mt-10 md:mt-0 lg:grid-cols-2 ">
					<div className="md:hidden  mt-10">
						{/* IMAGE SHOWING IN PHONE AND TABLET MODE */}
						<img className=" w-full " src={SecondContent} alt="" />
					</div>
					<div className="lg:mt-40 lg:px-40">
						<div className=" px-10">
							<h1 className=" font-Poppins mb-5  tracking-wide  text-gray-200 text-3xl  md:text-4xl md:mb-5 font-bold">
								Managing Your Online Store
							</h1>
							<p className="md:text-2xl  font-Roboto  tracking-wide   text-white  mb-10 text-lg  ">
								Obviously, there are many advantages of selling online, and the
								ability to control every facet of your online business is
								crucial to success in the long term.
							</p>
						</div>
					</div>
					{/* IMAGE SHOWING IN LARGE  MODE  */}
					<div className=" hidden md:block lg:p-20">
						<img className=" w-full " src={SecondContent} alt="" />
					</div>
				</div>
			</section>
		</>
	);
}

export default Description;

