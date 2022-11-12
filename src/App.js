import React from "react";
import { Routes, Route } from "react-router-dom";
import Logins from "./Components/Account/Login";
import Signup from "./Components/Account/Singnup";
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Product/Contact";
import Product from "./Pages/Product/Product";


const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Logins />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/product" element={<Product />} />
				<Route path="/contact" element={< Contact />} />
			</Routes>
		</>
	);
};

export default App;
