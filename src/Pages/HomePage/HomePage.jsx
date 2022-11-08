
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/navbarComponent";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Description from "./Description"; 
import MenProduct from './MenProduct'
import WomenProduct from "./WomenProduct"

const HomePage = () => {
	return (
		<>
			{/*  NAVBAR */}
			<section id="Navbar">
				<Navbar />
			</section>
			{/* HERE SECTION */}
			<section id="Hero">
				<HeroSection />
			</section>

			{/* SERVICE SECTION */}
			<section id="Service">
				<Services />
			</section>

			{/* DESCRIPTION  */}
			<section id="Description">
				<Description />
			</section>
     
			{/* MEN PRODUCT  */}
			<section>
				<MenProduct />
			</section>
			
			{/* WOMEN PRODUCT SECTION */}
			<section>
			<WomenProduct/>
			</section>

			{/* FOOTER  */}
			<section id="Footer_section" className=" bg-NavbarBgColor">
				<Footer />
			</section>
		</>
	);
};

export default HomePage;
