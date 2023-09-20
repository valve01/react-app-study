import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import Cart from './pages/Cart';
// import FullPizza from './components/FullPizza';
import MainLayout from './layouts/MainLayout';
import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullPizza = React.lazy(() => import('./components/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
function App() {
	return (

		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="/cart" element={ 
				<Suspense fallback={<div>Loading...</div>}> 
				<Cart /> 
				</Suspense> } />
				<Route path="/pizza/:id" element={<FullPizza />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>

	);
}

export default App;
