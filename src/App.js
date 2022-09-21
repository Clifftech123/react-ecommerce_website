import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBarComponent from './Components/navbarComponent';
import Logins from "./Account/Login";
import Signup from './Account/Singnup';



const App =() => {
  return (
		<>
			<BrowserRouter>
				<div className=''>
					<NavBarComponent />
				</div>

				<Routes>
					<Route path="/login" element={<Logins />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
