import React from 'react'
import FirstContent from "../../Components/assets/fFirstContetn.svg";

const Description = () => {
  return (
		<>
			<section id="Content" className="  bg-BgColor shadow-sm  ">
				<div className="grid gap-2 lg:grid-cols-2 mt-20   ">
					<div className="md:p-20 ">
						<img className="w-full " src={FirstContent} alt="" />
					</div>
					<div className="md::mt-40 md:px-40 ">
						<div className="md:py-60 px-10 py-10">
							<h1 className="  mb-5  text-gray-700  text-3xl  md:text-4xl md:mb-5 font-semibold ">
								Online selling and buy
							</h1>
							<p className="md:text-2xl  text-gray-700  text-lg tracking-wide ">
								Online shopping is convenient. It couldn’t be any more
								comfortable. All you need is a working computer, an internet
								connection and some money.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Description;

