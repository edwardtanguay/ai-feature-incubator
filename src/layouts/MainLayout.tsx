
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-white/20">
			<Navbar />
			<main className="flex-grow pt-16">
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
