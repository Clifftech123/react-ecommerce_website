import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import introImage from ".././Components/Images/shoppingOne.svg";
import FirstContent from "../Components/Images/fFirstContetn.svg";
import MenImagePng from "../Components/Images/ManPNG.png";
import SecondContent from "../Components/Images/SecondConttent.svg";
import { Post, MenProductSection, WomenProduct } from "../Items/Items.js";


const HomePage = () => {
	// SOCIAL ICONS LINKS
	const Github = "https://github.com/Clifftech123";
	const Twitter = "https://twitter.com/Clifftech_Dev";
	const Facebook = "https://web.facebook.com/opokuisaiah.clifford";
	const Instagram = "https://www.instagram.com/opokuisaiahclifford/";

	const Navigate = useNavigate();
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
			J{/*====================== 3 CARD SECTION ========================  */}
			<section id="Card_section">
				<div className="grid gap-2 md:gap-5 lg:grid-cols-3 mt-20   px-10 lg:px-40 ml-20">
					{Post.map((items, key) => (
						<div
							className="w-full shadow-sm Lg:shadow-lg mt-10  rounded-md hover:shadow-xl hover:bg-NavbarBgColor hover:text-white align-middle justify-center   lg:max-w-md  bg-white"
							key={key}
						>
							<img
								className="object-cover w-full h-48"
								src={items.img}
								alt="imag"
							/>
							<div className="p-4">
								<h4 className="text-2xl  mb-5 font-Poppins text-bntColor ">
									{items.title}
								</h4>
								<p className="mb-2 leading-normal text-xl ">{items.content}</p>
							</div>
						</div>
					))}
				</div>
			</section>
			{/*====================== CONTENT WITH IMAGE SECTION  ========================  */}
			{/* FIRST ROW  */}
			<section id="Content" className="bg-NavbarBgColor ">
				<div className="grid gap-2  lg:grid-cols-2 mt-20 text-white">
					<div className="md:p-20 ">
						<img className="w-full " src={FirstContent} alt="" />
					</div>
					<div className="md::mt-40 md:px-40 ">
						<div className="md:py-60 px-10">
							<h1 className=" font-Poppins  text-NavbarBgColor  text-4xl md:mb-5 font-bold">
								An e-commerce website is one that allows people to buy and sell
							</h1>
							<p className="text-2xl  font-serif">
								An e-commerce website is one that allows people to buy and sell
								physical goods, services, and digital products over the internet
							</p>
						</div>
					</div>
				</div>

				{/* SECOND ROW  */}

				<div className="grid gap-2 mt-40 md:mt-0 lg:grid-cols-2 text-white ">
					<div className="md:hidden  mt-20">
						{/* IMAGE SHOWING IN PHONE AND TABLET MODE */}
						<img className=" w-full " src={SecondContent} alt="" />
					</div>
					<div className="lg:mt-40 lg:px-40">
						<div className=" px-10">
							<h1 className=" font-Poppins text-NavbarBgColor text-4xl md:mb-5 font-bold">
								An e-commerce website is one that allows people to buy and sell
							</h1>
							<p className="text-2xl  font-serif">
								An e-commerce website is one that allows people to buy and sell
								physical goods, services, and digital products over the internet
							</p>
						</div>
					</div>
					{/* IMAGE SHOWING IN LARGE  MODE  */}
					<div className=" hidden md:block lg:p-20">
						<img className=" w-full " src={SecondContent} alt="" />
					</div>
				</div>
			</section>
			{/* ============= PRODUCT FOR  MEN =============  */}
			<section id="Recommendation" className=" mt-20  ">
				<h1 className="text-center  track-wilder text-5xl  font-Poppins align-middle md:text-7xl p-0 m-0">
					Product for Men
				</h1>
				<div className="grid gap-2 md:gap-5 lg:grid-cols-4 mt-20    px-10 lg:px-40 ml-20">
					{MenProductSection.map((Product, name) => (
						<div
							className="w-full   md:bg-white  bg-NavbarBgColor md:shadow-sm mt-10  rounded-md shadow-xl   align-middle justify-center   lg:max-w-md   borer border-NavbarBgColor   "
							key={name}
						>
							<img
								className="object-cover w-full h-80  object-center"
								src={Product.img}
								alt="imag"
							/>
							<div className="p-4   ">
								<h4 className="text-2xl  font-bold mb-5 font-Poppins text-NavbarBgColor ">
									{Product.Price}
									<span className=" ml-20"> </span>
								</h4>
								<p className="mb-2 leading-normal  md:text-black text-white  text-lg ">
									{Product.content}
								</p>

								<button
									type="button"
									className=" text-bntColor font-bold mt-5 text-xl font-Poppins"
									onClick={() => Navigate("/login")}
								>
									See all
								</button>
								{/* SOCIAL ICONS */}
								<span className="flex justify-between mt-5  font-bold  text-white   md:text-blue-600  text-xl ">
									<li title="Github" className="   block  ">
										<a href={Github} target={"_blank"} rel="noreferrer">
											<FaGithub />
										</a>
									</li>
									<li title="tWitter" className=" block   ">
										<a href={Twitter} target={"_blank"} rel="noreferrer">
											<FaTwitter />
										</a>
									</li>
									<li title="Facebook" className=" block  ">
										<a href={Facebook} target={"_blank"} rel="noreferrer">
											<FaFacebook />
										</a>
									</li>
									<li title="Instagram" className=" block ">
										<a href={Instagram} target={"_blank"} rel="noreferrer">
											<FaInstagram />
										</a>
									</li>
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* MORE RECOMMENDATION  FOR SECTION  */}
			<section className="bg-white  mb ">
				<div className="grid gap-2  lg:grid-cols-2 mt-20 h-screen overflow-clip text-white">
					<div className="md:p-40 ">
						<img className="w-full  overflow-clip " src={MenImagePng} alt="" />
					</div>
					<div className="md::mt-40 md:px-40 ">
						<div className="md:py-60 px-10">
							<h1 className=" font-Poppins  text-NavbarBgColor  text-4xl md:mb-5 font-bold">
								An e-commerce website is one that allows people to buy and sell
							</h1>
							<p className="text-2xl  font-serif text-black">
								An e-commerce website is one that allows people to buy and sell
								physical goods, services, and digital products over the internet
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*============ PRODUCT FOR WOMEN ===================== */}
			<section id="Recommendation" className=" mt-40  ">
				<h1 className="text-center  mt:60  text-5xl  font-Poppins align-middle md:text-7xl p-0 m-0">
					Product for Women
				</h1>
				<div className="grid gap-2 md:gap-5 lg:grid-cols-4 mt-20   px-10 lg:px-40 ml-20">
					{WomenProduct.map((Product, name) => (
						<div
							className="w-full Lg:shadow-lg mt-10  rounded-md shadow-xl   align-middle justify-center   lg:max-w-md   borer   md:bg-white    bg-NavbarBgColor border-NavbarBgColor   "
							key={name}
						>
							<img
								className="object-cover w-full h-80  object-center"
								src={Product.img}
								alt="imag"
							/>
							<div className="p-4   ">
								<h4 className="text-2xl  font-bold mb-5 font-Poppins   text-NavbarBgColor ">
									{Product.Price}
									<span className=" ml-20"> </span>
								</h4>
								<p className="mb-2 leading-normal text-lg  md:text-black text-white">
									{Product.content}
								</p>

								<button
									type="button"
									className=" text-bntColor font-bold mt-5 text-xl font-Poppins"
									onClick={() => Navigate("/login")}
								>
									See all
								</button>
								{/* SOCIAL ICONS */}
								<span className="flex justify-between mt-5  font-bold   text-white   md:text-blue-600  text-xl ">
									<li title="Github" className="   block  ">
										<a href={Github} target={"_blank"} rel="noreferrer">
											<FaGithub />
										</a>
									</li>
									<li title="tWitter" className=" block   ">
										<a href={Twitter} target={"_blank"} rel="noreferrer">
											<FaTwitter />
										</a>
									</li>
									<li title="Facebook" className=" block  ">
										<a href={Facebook} target={"_blank"} rel="noreferrer">
											<FaFacebook />
										</a>
									</li>
									<li title="Instagram" className=" block ">
										<a href={Instagram} target={"_blank"} rel="noreferrer">
											<FaInstagram />
										</a>
									</li>
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* ======== FOOTER SECTION  ========*/}
		</>
	);
};

export default HomePage;
