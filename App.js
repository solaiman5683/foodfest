import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
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
				</Routes>
			</NativeRouter>
		</>
	);
}
