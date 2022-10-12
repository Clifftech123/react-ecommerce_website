import React from 'react'
import introImage from '.././Components/Images/shoppingOne.svg'
import text from '../Components/Images/text.svg'

 
const HomePage = () => {
	
	// CARD INFROMATION
	const posts = [
		{
			title: "Product",
			img: "https://cdn2.mageplaza.com/media/general/ecommerce-product-photo.jpg",
			content:
				"react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
		},
		{
			title: "Costumer Support",
			img: "https://www.revechat.com/wp-content/uploads/2022/02/customer-support-2-1280x720.jpg",
			content:
				"react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
		},
		{
			title: " Constutation",
			img: "https://wecarecomputers.com/wp-content/uploads/2018/02/consultation.jpg",
			content:
				"react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
		},
	];



	// RETUEMWNT OF CONTENT
	return (
		<>
			{/* INTRO SECTION */}
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
							<h1 className=" tracking-normal  mt-6 text-2xl font-Poppins font-bold  text-bntColor sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
								Take Your online Shopping
								<br className="hidden lg:inline" />
								<span className="text-G_Purple">
									To next level with
									<br /> our E-commerce Platform
								</span>
							</h1>
							{/* INTRODUCTION TEXT  */}
							<p className=" tracking-wide text-lg text-white font-Arimo mt-2  sm:mt-4 sm:text-xl">
								An e-commerce website is one that allows people to buy and sell
								physical goods, services, and digital products over the internet
								rather than at a brick-and-mortar location. Through an
								e-commerce website, a business can process orders, accept
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

			{/*====================== WELCOME TEXT ========================  */}
			{/* <section id="Welcome_text">
				<div className="text-center align-middle">
					<h1 className=" text-3xl mt-10 text-black lg:font-bold">
						{" "}
						Your welcome to Our services. We give you best costumer Experience{" "}
					</h1>
					<p className="lg:px-40 px-10 text-2xl ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi repudiandae consequuntur
						voluptatum laborum numquam blanditiis harum quisquam eius sed odit
						fugiat iusto fuga praesentium optio, eaque rerum! Provident
						similique accusantium nemo autem.
					</p>
				</div>
			</section> */}

			{/*====================== 3 CARD SECTION ========================  */}
			<section id="Card_section">
				<div className="grid gap-2 md:gap-5 lg:grid-cols-3 mt-20  px-10 lg:px-40 ml-20">
					{posts.map((items, key) => (
						<div
							className="w-full shadow-sm Lg:shadow-lg mt-10  hover:shadow-xl align-middle justify-center rounded-lg  lg:max-w-md  bg-white"
							key={key}
						>
							<img
								className="object-cover w-full h-48"
								src={items.img}
								alt="imag"
							/>
							<div className="p-4">
								<h4 className="text-xl font-semibold text-blue-600">
									{items.title}
								</h4>
								<p className="mb-2 leading-normal">{items.content}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/*====================== CONENT WITH IAMGE SECTION  ========================  */}
			<section id="Content"  className='bg-white' >
				<div className="grid gap-2  lg:grid-cols-2 mt-20">
					<div className="">
						<img className="px-40 w-full " src={text} alt="" />
					</div>
					<div className="mt-40 px-40">
						<h1>
							An e-commerce website is one that allows people to buy and sell
						</h1>
						<p>
							An e-commerce website is one that allows people to buy and sell
							physical goods, services, and digital products over the internet
							rather than at a brick-and-mortar location. Through an e-commerce
							website, a business can process orders, accept payments, manage
							shipping and logistics, and provide customer service.1
						</p>
					</div>
				</div>

				<div className="grid gap-2  lg:grid-cols-2 mt-20">
					<div className="mt-40 px-40">
						<h1>
							An e-commerce website is one that allows people to buy and sell
						</h1>
						<p>
							An e-commerce website is one that allows people to buy and sell
							physical goods, services, and digital products over the internet
							rather than at a brick-and-mortar location. Through an e-commerce
							website, a business can process orders, accept payments, manage
							shipping and logistics, and provide customer service.1
						</p>
					</div>
					<div className="">
						<img className="px-40 w-full " src={text} alt="" />
					</div>
				</div>
			</section>
		</>
	);
}

export default HomePage

