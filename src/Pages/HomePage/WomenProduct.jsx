import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { WomenProductLinks } from "../../Components/ItemsLinks/Items.js";
import RecommendationImageFromWomen from "../../Components/assets/ImageForWomen.png";

const WomenProduct = () => {

    const Github = "https://github.com/Clifftech123";
		const Twitter = "https://twitter.com/Clifftech_Dev";
		const Facebook = "https://web.facebook.com/opokuisaiah.clifford";
    const Instagram = "https://www.instagram.com/opokuisaiahclifford/";
    
    const Navigate = useNavigate();

  return (
		<>
			{/*  ======= 
			MORE RECOMMENDATION  FOR  WOMEN HEADING CONTENT   SECTION  
			CONTENT WITH IMAGE DISPLAY WOMEN  CLOTHING AND WHY YOU SHOULD BUY FROM US 
			=========  */}
			<section className="bg-white   mt-10 md:mt-20 ">
				<div className="grid gap-2  lg:grid-cols-2  overflow-clip text-white">
					<div className=" md:px-20 ">
						<div className=" md:py-60  py-0 px-10 mt-20 mb-10">
							<h1 className=" font-Poppins  text-NavbarBgColor mb-2 text-4xl md:mb-5 font-bold">
								Women's Dresses
							</h1>
							<p className="text-2xl mt-5  font-Roboto tracking-wider   text-black">
								If you are specifically hunting for designer pieces, then you
								can't miss out on Pernia's Pop Up Shop. Started by entrepreneur
								Pernia Qureshi, it is a one-stop destination for everything
								designer in your wardrobe. From Kunal Rawal's pleated kurtas to
								Ashish N Soni's tailored Nehru jackets, you will find everything
								here
							</p>
						</div>
					</div>

					<div className="md:p-20 ">
						{/* <note:!> I WILL ADD </note:!> */}
						<img
							className="w-full  hidden md:block overflow-clip "
							src={RecommendationImageFromWomen}
							alt=""
						/>
					</div>
				</div>
			</section>
			{/*============ CLOTHING FOR WOMEN  CONTENT SECTION 
			CONTENT FOR WOMEN WITH SAMPLE CLOTHING AND PRICE AND YOU CHECK FOR MORE AND SEE
			MORE BUTTON 
			===================== */}
			<section
				id="Recommendation"
				className="   md:mr-0  md:ml-0 mr-10 ml-10  md:px-20    "
			>
				<div className="  h-200 grid gap-2 md:gap-10 lg:grid-cols-4 mt-10 ">
					{WomenProductLinks.map((Product, name) => (
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
								<p className="mb-2 leading-normal text-lg font-Roboto md:font-sans  text-white">
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
		</>
	);
}

export default WomenProduct

