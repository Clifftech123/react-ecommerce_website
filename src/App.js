import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logins from './Components/Account/Login';
import Signup from './Components/Account/Singnup';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';

const App =() => {
  return (
		<>
			<BrowserRouter>

				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/login" element={ <Logins/> } />
					<Route path="/signup" element={<Signup/>} />
					<Route path = "/dashboard" element={ <Dashboard/> } />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
