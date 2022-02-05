import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './Components/Screens/Auth/Login';
import Signup from './Components/Screens/Auth/Signup';
import Home from './Components/Screens/Home/Home';
import Chief from './Components/Screens/Welcome/Chief';
import FindFood from './Components/Screens/Welcome/FindFood';
import Variety from './Components/Screens/Welcome/Variety';
import Welcome from './Components/Screens/Welcome/Welcome';

export default function App() {
	return (
		<>
			<NativeRouter>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/find' element={<FindFood />} />
					<Route path='/chief' element={<Chief />} />
					<Route path='/variety' element={<Variety />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</NativeRouter>
		</>
	);
}
