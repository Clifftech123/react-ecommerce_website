import React from 'react'
import introImage from "../../Components/assets/shoppingOne.svg";

const HeroSection = () => {
  return (
		<>
			{/* ==============  HERO SECTION ==============*/}
			<div id="Introduction" className="Introduction text-center">
				<div className="  bg-NavbarBgColor shadow  grid lg:grid-cols-2 2xl:grid-cols-5">
					<div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
						<div className="xl:max-w-lg ">
							{/* IMAGE  DISPLAY ON SMALL SCREEN  ONLY  */}
							<div className="aspect-w-16 aspect-h-9 lg:mt-32">
								<img
									className=" w-full mt-10 object-cover   object-center 2xl:w-full 2zl:mt-10 2xl:object-cover 2xl:object-center   sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
									src={introImage}
									alt="SVG img "
								/>
							</div>
							<h1 className=" tracking-normal  mt-6 text-2xl font-Poppins  text-gray-300 sm:mt-8 sm:text-2xl lg:text-3xl xl:text-3xl">
								Take Your online Shopping
								<br className="hidden lg:inline" />
								<span className="text-G_Purple">
									To next level with
									<br /> our E-commerce Platform
								</span>
							</h1>
							{/* INTRODUCTION TEXT  */}

							<div className="mt-4 sm:mt-6"></div>
						</div>
					</div>
					{/* IMAGE   DISPLAY ON LARGE SCREEN ONLY   */}
					<div className="hidden relative md:mt-10 lg:block 2xl:col-span-3">
						<img
							className="absolute inset-0  w-4/5 h-full p-5 ml-20  object-center "
							src={introImage}
							alt="  SVG FOR LARGE SCREEN "
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection
