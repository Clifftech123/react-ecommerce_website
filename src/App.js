import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBarComponent from './Components/navbarComponent';
import Logins from "./Account/Login";
import Signup from './Account/Singnup';
import HomePage from './Pages/HomePage';



const App =() => {
  return (
		<>
			<BrowserRouter>
				<div className="">
					<NavBarComponent />
				</div>

				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/login" element={<Logins />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
