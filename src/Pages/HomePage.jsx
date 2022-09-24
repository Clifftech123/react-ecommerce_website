import React from 'react'
import introImage from '.././Components/Images/shoppingOne.svg'
import CardImage from ".././Components/Images/shoppingTwo.svg";
import Services from ".././Components/Images/Customer service_Flatline.svg";

const HomePage = () => {
  return (
		<>
			{/* INTRO SECTION */}
			<div id="Introduction" className="Introduction text-center">
				<div>
					<div className=" bg-white shadow  grid lg:grid-cols-2 2xl:grid-cols-5">
						<div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
							<div className="xl:max-w-lg ">
								{/* IMAGE  DISPLAY ON SMALL SCREEN  ONLY  */}
								<div className="aspect-w-16 aspect-h-9 lg:mt-32">
									<img
										className=" w-full mt-10 object-cover object-center 2xl:w-full 2zl:mt-10 2xl:object-cover 2xl:object-center   sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
										src={introImage}
										alt="SVG img "
									/>
								</div>
								<h1 className="mt-6 text-2xl font-Poppins font-bold text-bntColor sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
									Take Your online Shopping
									<br className="hidden lg:inline" />
									<span className="text-G_Purple">
										To next level with
										<br /> our E-commerce Platform
									</span>
								</h1>
								{/* INTRODUCTION TEXT  */}
								<p className=" text-lg  font-Arimo mt-2 text-gray-600 sm:mt-4 sm:text-xl">
									An e-commerce website is one that allows people to buy and
									sell physical goods, services, and digital products over the
									internet rather than at a brick-and-mortar location. Through
									an e-commerce website, a business can process orders, accept
									payments, manage shipping and logistics, and provide customer
									service.1
								</p>
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
			</div>

			{/*====================== CARD SECTION========================  */}
			<div className="lg:py-20 lg:px-48 px-20 py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
				{/*============ FIRST CARD=========  */}
				<div className=" overflow-hidden   rounded-xl border p-1  hover:shadow-lg  bg-white  shadow-sm">
					<img
						className="   sm:w-full sm:object-cover sm:object-center"
						src={CardImage}
						alt="Programing"
					/>
					<div className="">
						<div className=" font-Poppins   text-3xl text-center mb-2">
							Product
						</div>
						<p className="text-gray-700 text-base mb-5">
							Learning to code not only allows you to give machines
							instructions, but it also teaches you abstract thinking and
							problem-solving. In fact, problem-solving skills and creativity
							are key to becoming a successful computer programmer. Of course,
							you'll also need to know some coding languages to apply your
							knowledge.
						</p>
					</div>
				</div>
				{/*============ FIRST CARD=========  */}
				<div className=" overflow-hidden   rounded-xl border p-1  hover:shadow-lg  bg-white  shadow-sm">
					<img
						className="   sm:w-full sm:object-cover sm:object-center"
						src={CardImage}
						alt="Programing"
					/>
					<div className="">
						<div className=" font-Poppins   text-3xl text-center mb-2">
							Costumer service
						</div>
						<p className="text-gray-700 text-base mb-5">
							Learning to code not only allows you to give machines
							instructions, but it also teaches you abstract thinking and
							problem-solving. In fact, problem-solving skills and creativity
							are key to becoming a successful computer programmer. Of course,
							you'll also need to know some coding languages to apply your
							knowledge.
						</p>
					</div>
				</div>

				{/*============SECOND IMAGE=========  */}
				<div className=" overflow-hidden   rounded-xl border p-1  hover:shadow-lg  bg-white  shadow-sm">
					<img
						className="   sm:w-full sm:object-cover sm:object-center"
						src={Services}
						alt="Programing"
					/>
					<div className="">
						<div className=" font-Poppins   text-3xl text-center mb-2">
							Discount Options
						</div>
						<p className="text-gray-700 text-base mb-5">
							Learning to code not only allows you to give machines
							instructions, but it also teaches you abstract thinking and
							problem-solving. In fact, problem-solving skills and creativity
							are key to becoming a successful computer programmer. Of course,
							you'll also need to know some coding languages to apply your
							knowledge.
						</p>
					</div>
				</div>

				{/* FOURTH CARD */}
				{/*============ FIRST CARD=========  */}
				{/*============ FIRST CARD=========  */}
				<div className=" overflow-hidden   rounded-xl border p-1  hover:shadow-lg  bg-white  shadow-sm">
					<img
						className="   sm:w-full sm:object-cover sm:object-center"
						src={CardImage}
						alt="Programing"
					/>
					<div className="">
						<div className=" font-Poppins   text-3xl text-center mb-2">
							Free Delivery
						</div>
						<p className="text-gray-700 text-base mb-5">
							Learning to code not only allows you to give machines
							instructions, but it also teaches you abstract thinking and
							problem-solving. In fact, problem-solving skills and creativity
							are key to becoming a successful computer programmer. Of course,
							you'll also need to know some coding languages to apply your
							knowledge.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage

