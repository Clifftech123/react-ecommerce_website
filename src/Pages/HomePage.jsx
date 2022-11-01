import React, {useState} from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import introImage from ".././Components/Images/shoppingOne.svg";
import Footer from "../Components/Footer";
import FirstContent from "../Components/Images/fFirstContetn.svg";
import MenImagePng from "../Components/Images/ManPNG.png";
import SecondContent from "../Components/Images/SecondConttent.svg";
import RecommendationImageFromWomen from '../Components/Images/ImageForWomen.png'
import { Post, MenProductSection, WomenProduct } from "../Items/Items.js";

const HomePage = () => {

//    SHOEING AND HIDDEN TEXT TOGGLE
const [ showText , hiddeText ] = useState(false);

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
			J
			{/*====================== 3 CARD SECTION  UNDER THR NAVBAR SECTION========================  */}
			<section id="Card_section" className="">
				<div className="grid gap-2 md:gap-5 lg:grid-cols-3 mt-20   px-5 lg:px-40 ">
					{Post.map((items, key) => (
						<div
							className="w-full Lg:shadow-lg mt-10  rounded-md hover:shadow-xl hover:bg-NavbarBgColor hover:text-white align-middle justify-center  shadow-lg  lg:max-w-md  bg-white"
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
			{/*====================== CONTENT  SITE  DESCRIPTION WITH IMAGE SECTION  ========================  */}
			{/* FIRST ROW  */}
			<section id="Content" className="bg-NavbarBgColor ">
				<div className="grid gap-2  lg:grid-cols-2 mt-20 text-white">
					<div className="md:p-20 ">
						<img className="w-full " src={FirstContent} alt="" />
					</div>
					<div className="md::mt-40 md:px-40 ">
						<div className="md:py-60 px-10">
							<h1 className=" font-Poppins  text-white  text-4xl md:mb-5 font-bold">
								Online selling and buy
							</h1>
							<p className="text-2xl tracking-wide ">
								Online shopping is convenient. It couldn’t be any more
								comfortable. All you need is a working computer, an internet
								connection and some money. Voila! You’re getting your product
								delivered a few days later — often free of charge.
							</p>
							<div className=" md:mt-5    md:text-start text-center">
								<button
									className="  md:mt-10    text-center px-10 text-xl py-2 rounded-md  bg-bntColor"
									type="button"
								>
									See more
								</button>
							</div>
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
							<h1 className=" font-Poppins text-white text-4xl md:mb-5 font-bold">
								Managing Your Online Store
							</h1>
							<p className="text-2xl tracking-wide ">
								Obviously, there are many advantages of selling online, and the
								ability to control every facet of your online business is
								crucial to success in the long term. Multiorders simplifies this
								and allows the user to sell through multiple channels and have
								complete control over their business.
							</p>
							{/* SEE MORE BUTTON */}
							<div className=" md:mt-5    md:text-start text-center">
								<button
									className="  md:mt-10    text-center px-10 text-xl py-2 rounded-md  bg-bntColor"
									type="button"
								>
									See more
								</button>
							</div>

							{/* HIDDEN TEXT  */}
							<div>
								<p className="text-2xl  mt-3 hidden font-serif">
									An e-commerce website is one that allows people to buy and
									sell physical goods, services, and digital products over the
									internet An e-commerce website is one that allows people to
									buy and sell physical goods, services, and digital products
									over the internet An e-commerce website is one that allows
									people to buy and sell physical goods, services, and digital
									products over the internet
								</p>
							</div>
						</div>
					</div>
					{/* IMAGE SHOWING IN LARGE  MODE  */}
					<div className=" hidden md:block lg:p-20">
						<img className=" w-full " src={SecondContent} alt="" />
					</div>
				</div>
			</section>
			{/*  ======= 
			MORE RECOMMENDATION  HADING CONTENT FOR  MEN SECTION =========  */}
			<section className="bg-white shadow-xl   ">
				<div className="grid gap-2  lg:grid-cols-2 mt-20 h-screen overflow-clip px:20 text-white">
					<div className="md:p-40  hidden md:block">
						<img className="w-full  overflow-clip " src={MenImagePng} alt="" />
					</div>
					<div className="md:mt-40  mb:40  md:px-40  hidden md:block">
						<div className="md:py-60  p-40px-10">
							<h1 className=" font-Poppins text-NavbarBgColor  text-4xl md:mb-5 font-bold">
								Quality Product for men
							</h1>
							<p className="text-2xl   tracking-wide text-black">
								If you are specifically hunting for designer pieces, then you
								can't miss out on Pernia's Pop Up Shop. Started by entrepreneur
								Pernia Qureshi, it is a one-stop destination for everything
								designer in your wardrobe. From Kunal Rawal's pleated kurtas to
								Ashish N Soni's tailored Nehru jackets, you will find everything
								here
							</p>
						</div>
					</div>

					{/* SHOWING IT ON SMALL DEVICES */}
					<div className="mt-40  mb:10  px-10  md:hidden">
						<div className="md:py-60  p-40px-10">
							<h1 className=" font-Poppins text-NavbarBgColor  text-4xl mb-5 font-bold">
								Quality Product for men
							</h1>
							<p className="text-2xl  track-wider text-black">
								If you are specifically hunting for designer pieces, then you
								can't miss out on Pernia's Pop Up Shop. Started by entrepreneur
								Pernia Qureshi, it is a one-stop destination for everything
								designer in your wardrobe. From Kunal Rawal's pleated kurtas to
								Ashish N Soni's tailored Nehru jackets, you will find everything
								here
							</p>
						</div>
					</div>
					<div className="md:p-40 md:hidden  h-full">
						<img className="w-full  h-full  " src={MenImagePng} alt="" />
					</div>
				</div>
			</section>
			{/* ============= CLOTHING FOR  MEN  CONTENT   SECTION=============  */}
			<section
				id="Recommendation"
				className=" mt-20 md:mr-0  md:ml-0 mr-10 ml-10 mx-5 md:px-40 "
			>
				<div className="grid h-200 gap-2 md:gap-10 lg:grid-cols-4 mt-20  ">
					{MenProductSection.map((Product, name) => (
						<div
							className="w-full  shadow-2xl  bg-NavbarBgColor md:shadow-sm mt-10  rounded-lg    align-middle justify-center  lg:max-w-md   borer border-NavbarBgColor relative overflow-hidden  "
							key={name}
						>
							<span className="">
								<img
									className="object-cover w-full h-80  object-center hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={Product.img}
									alt="imag"
								/>
							</span>
							<div className="p-4   ">
								<h4 className="text-2xl  font-bold  font-Poppins text-gray-400  ">
									{Product.amountMoney}
									<span className=" ml-20"> </span>
								</h4>
								<p className=" leading-normal   text-white  text-lg ">
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
								<span className="flex justify-between mt-5  font-bold align-bottom  text-white     text-xl ">
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
			{/*  ======= 
			MORE RECOMMENDATION  FOR  WOMEN HEADING CONTENT   SECTION  
			=========  */}
			<section className="bg-white  mt-20 ">
				<div className="grid gap-2  lg:grid-cols-2  h-screen overflow-clip text-white">
					<div className="md::mt-40 md:px-40 ">
						<div className="md:py-60 px-10 mt-20 mb-10">
							<h1 className=" font-Poppins  text-NavbarBgColor  text-4xl md:mb-5 font-bold">
								An e-commerce website is one that allows people to buy and sell
							</h1>
							<p className="text-2xl  font-serif text-black">
								An e-commerce website is one that allows people to buy and sell
								physical goods, services, and digital products over the internet
							</p>
						</div>
					</div>

					<div className="md:p-60 p-10 ">
						{/* <note:!> I WILL ADD </note:!> */}
						<img
							className="w-full  overflow-clip "
							src={RecommendationImageFromWomen}
							alt=""
						/>
					</div>
				</div>
			</section>
			{/*============ CLOTHING FOR WOMEN  CONTENT SECTION ===================== */}
			<section
				id="Recommendation"
				className=" mt-40   md:mr-0  md:ml-0 mr-10 ml-10  md:px-40    "
			>
				<div className="  h-200 grid gap-2 md:gap-10 lg:grid-cols-4 mt-20 ">
					{WomenProduct.map((Product, name) => (
						<div
							className="w-full Lg:shadow-lg mt-10  rounded-lg shadow-2xl    align-middle justify-center   lg:max-w-md   bg-NavbarBgColor border-NavbarBgColor relative overflow-hidden   "
							key={name}
						>
							<img
								className="object-cover w-full h-80  object-center hover:scale-110 transition duration-300 ease-in-out bg-transparent  "
								src={Product.img}
								alt="imag"
							/>
							<div className="p-4   ">
								<h4 className="text-2xl  font-bold mb-5 font-Poppins  text-gray-400   ">
									{Product.WomenPrice}
									<span className=" ml-20"> </span>
								</h4>
								<p className="mb-2 leading-normal text-lg   text-white">
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
								<span className="flex justify-between mt-5  font-bold   text-white    text-xl ">
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
			{/*-------- FOOTER SECTION RENDER WITH IT FROM THE FOOTER COMPONENT -----*/}
			<section id="Footer_section" className=" bg-NavbarBgColor">
				<Footer />
			</section>
		</>
	);
};

export default HomePage;
