import React from 'react'
import { useNavigate } from 'react-router-dom';
import MenImagePng from "../../Components/assets/ManPNG.png";
import { MenProductSection } from "../../Components/ItemsLinks/Items.js";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const MenProduct = () => {
    const Github = "https://github.com/Clifftech123";
		const Twitter = "https://twitter.com/Clifftech_Dev";
		const Facebook = "https://web.facebook.com/opokuisaiah.clifford";
		const Instagram = "https://www.instagram.com/opokuisaiahclifford/";

		const Navigate = useNavigate();
  return (
		<>
		
			<section className=" bg-white mt-20 md:mt-0 ">
				<div className="grid gap-2  lg:grid-cols-2    overflow-clip px:20 ">
					<div className="md:p-20  hidden md:block">
						<img className="w-full  overflow-clip " src={MenImagePng} alt="" />
					</div>
					<div className="md:mt-40  mb:40  md:px-40  hidden md:block">
						<div className="md:py-40  p-40px-10">
							<h1 className=" font-Poppins text-NavbarBgColor md:text-5xl  text-2xl md:mb-5 font-bold">
								Product for men
							</h1>
							<p className="text-lg  font-Roboto  tracking-wide  font-normal md:text-3xl ">
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
					<div className="mt-40  mb:10   px-10  md:hidden">
						<div className="md:py-60 mb-20 p-40px-10">
							<h1 className=" font-Poppins text-NavbarBgColor text-3xl mb-5 font-bold">
								Quality Product for men
							</h1>
							<p className="text-2xl  font-Roboto    track-wider text-black">
								If you are specifically hunting for designer pieces, then you
								can't miss out on Pernia's Pop Up Shop. Started by entrepreneur
								Pernia Qureshi, it is a one-stop destination for everything
								designer in your wardrobe. From Kunal Rawal's pleated kurtas to
								Ashish N Soni's tailored Nehru jackets, you will find everything
								here
							</p>
						</div>
					</div>
					<div className="md:p-40 md:hidden hidden  ">
						<img className="w-full   " src={MenImagePng} alt="" />
					</div>
				</div>
			</section>
			{/* ============= 
			CONTENT FOR THE MEN .SAMPLE  FOR SOME WE HAVE AND YOU CAN 
			CHECK FOR MORE IN SEE MORE BUTTON
			CLOTHING FOR  MEN  CONTENT   SECTION
			
			=============  */}
			<section
				id="Recommendation"
				className="  md:mr-0  md:ml-0 mr-10 ml-10 mx-5 md:px-20 "
			>
				<div className="grid h-200 gap-2 md:gap-10 lg:grid-cols-4   ">
					{MenProductSection.map((Product, name) => (
						<div
							className="w-full  shadow-5xl  bg-NavbarBgColor md:shadow-sm mt-10  rounded-lg    align-middle justify-center  lg:max-w-md    borer border-NavbarBgColor relative overflow-hidden  "
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
								<h4 className="text-2xl  font-bold  font-Roboto text-gray-300  ">
									{Product.amountMoney}
									<span className=" ml-20"> </span>
								</h4>
								<p className=" leading-normal  font-Roboto md:font-sans    mt-5  text-white  text-lg ">
									{Product.content}
								</p>

								<button
									type="button"
									className=" text-bntColor font-bold mt-5 text-xl font-Roboto"
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
		</>
	);
}

export default MenProduct
